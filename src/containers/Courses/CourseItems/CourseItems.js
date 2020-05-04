import React, {Component} from 'react';

import './CourseItems.css'
import CourseDetail from "../../../components/Course/CourseDetail/CourseDetail"
import Topic from "../../../components/Course/CourseDetail/Topic/Topic"
import axios from "../../../axios";
import {Container} from "react-bootstrap";


class CourseItems extends Component {
    state = {
        course: [],
        topics: [],
        error: '',
        numLectures: ''
    }


    componentDidMount() {
        if (this.props.match.params.id) {
            axios.get('/learn/course/' + this.props.match.params.id)
                .then(response => {
                    this.setState({course: response.data})
                }).catch(error => {
                this.setState({error: error})
            });

            axios.get('/learn/batch/?course=' + this.props.match.params.id)
                .then(response => {
                    this.setState({topics: response.data})
                    let totalLectures = 0
                    this.state.topics.map(topic => {
                        return totalLectures = totalLectures + topic.lectures.length;
                    })
                    this.setState({numLectures: totalLectures})
                }).catch(error => {
                this.setState({error: error})
            });


        }

    };

    componentDidUpdate(prevProps, prevState, snapshot) {

    };


    render() {
        let course = <CourseDetail title="Something went wrong"/>
        let topic = <p>Something went wrong</p>
        if (!this.state.error) {
            course = <CourseDetail title={this.state.course.title}
                                   description={this.state.course.description}
                                   key={this.state.course.id}
                                   id={this.state.course.id}
                                   authorName={this.state.course.author_name}
                                   duration={this.state.course.duration}
                                   languageName={this.state.course.language_name}
                                   price={this.state.course.price}
                                   pubDate={this.state.course.pub_date}
                                   rating={this.state.course.rating}
                                   author={this.state.course.author}
                                   image={this.state.course.image}
                                   numLectures={this.state.numLectures}/>


            topic = this.state.topics.map(
                topic => {
                    return <Topic title={topic.title}
                                  description={topic.description}
                                  course={topic.course}
                                  lectures={topic.lectures}
                                  id={topic.id}
                                  key={topic.id}/>

                });

        }
        return (
            <div>
                {course}
                <Container>
                    {topic}
                </Container>
            </div>
        )

    }

}

export default CourseItems