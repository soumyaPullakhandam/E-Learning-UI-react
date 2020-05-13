import React, {Component} from 'react';

import './CourseItems.css'
import CourseDetail from "../../../components/Course/CourseDetail/CourseDetail"
import Topic from "../../../components/Course/CourseDetail/Topic/Topic"
import axios from "../../../axios";
import {Container} from "react-bootstrap";
import {connect} from "react-redux";


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

    onEnrolAccept = (evt) => {
        const id = evt.target.dataset.id;
        axios.post('/enrol/', {'course': id})
            .then(response => {
                this.props.history.push('/myenrolments');
            }).catch(error => {
            this.setState({error: error})
        });
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
                                   numLectures={this.state.numLectures}
                                   authen={this.props.authen}
                                   group={this.props.group}
                                   onEnrolAccept={this.onEnrolAccept}
            />


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

const mapStateToProps = state => {
    return {
        group: (state.auth.group === 1) ? 'tutor' : 'student',
        authen: state.auth.authen
    };
};

export default connect(mapStateToProps)(CourseItems);
