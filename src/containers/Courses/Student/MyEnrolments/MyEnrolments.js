import React, {Component} from 'react';
import MyEnrolment from "../../../../components/Course/Student/MyEnrolment/MyEnrolment";
import axios from "../../../../axios";
import Aux from "../../../../hoc/Aux/Aux";
import './MyEnrolments.css';
import CourseDetail from "../../../../components/Course/CourseDetail/CourseDetail";
import {connect} from "react-redux";

class MyEnrolments extends Component {
    state = {
        myenrolments: [],
        catsFilter: '',
        courses: []
    }


    componentDidMount() {
        console.log(this.props);
        axios.get('/enrol/')
            .then(response => {
                this.setState({myenrolments: response.data})
            }).catch(error => {
            this.setState({error: error})
        });

        this.getCourses();
    };

    getCourses = () => {
        axios.get('/learn/course/?latest=3')
            .then(response => {
                this.setState({courses: response.data})
            }).catch(error => {
            this.setState({error: error})
        });
    };

    onRatingClick = (rating, id) => {
        axios.patch('/enrol/' + id + '/', {'rating': rating})
            .then(response => {
            })
            .catch(error => {

            });
    };

    onEnrolAccept = (evt) => {
        const id = evt.target.dataset.id;
        axios.post('/enrol/', {'course': id})
            .then(response => {
                this.getCourses();
            }).catch(error => {
            this.setState({error: error})
        });
    };


    courseSelectedHandler = (id) => {
        this.props.history.push('/course/' + id);
    };

    render() {
        let myenrol = <p style={{textAlign: 'center'}}> Something went wrong!!</p>

        if (!this.state.error) {
            myenrol = this.state.myenrolments.map(
                enrol => {
                    return <MyEnrolment title={enrol.course_list.title}
                                        description={enrol.course_list.description}
                                        key={enrol.course_list.id}
                                        authorName={enrol.course_list.author_name}
                                        rating={enrol.rating}
                                        image={enrol.course_list.image}
                                        id={enrol.course_list.id}
                                        enrol_date={enrol.enrol_date}
                                        completion={enrol.completion}
                                        onRatingClick={(rating, id) => this.onRatingClick(rating, id)}
                                        clicked={() => this.courseSelectedHandler(enrol.course_list.id)}/>

                });
        }


        let courseDetail = [];
        if (this.state.courses.length > 0) {

            this.state.courses.map((course, i) => {
                return courseDetail.push(<CourseDetail title={this.state.courses[i].title}
                                                       description={this.state.courses[i].description}
                                                       key={this.state.courses[i].id}
                                                       id={this.state.courses[i].id}
                                                       authorName={this.state.courses[i].author_name}
                                                       duration={this.state.courses[i].duration}
                                                       languageName={this.state.courses[i].language_name}
                                                       price={this.state.courses[i].price}
                                                       pubDate={this.state.courses[i].pub_date}
                                                       rating={this.state.courses[i].rating}
                                                       author={this.state.courses[i].author}
                                                       image={this.state.courses[i].image}
                                                       numLectures={this.state.numLectures}
                                                       authen={this.props.authen}
                                                       group={this.props.group}
                                                       onEnrolAccept={this.onEnrolAccept}/>)
            })
        }


        return (
            <Aux>
                <section className='Courses'>
                </section>

                <div className="bs-example">
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"/>
                            <li data-target="#myCarousel" data-slide-to="1"/>
                            <li data-target="#myCarousel" data-slide-to="2"/>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active text-left">
                                {courseDetail[0]}
                            </div>
                            <div className="carousel-item text-left">
                                {courseDetail[1]}
                            </div>
                            <div className="carousel-item text-left">
                                {courseDetail[2]}
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
                            <span className="carousel-control-prev-icon"/>
                        </a>
                        <a className="carousel-control-next" href="#myCarousel" data-slide="next">
                            <span className="carousel-control-next-icon"/>
                        </a>
                    </div>
                </div>


                <div className='container'>
                    <div className="row mb-2">
                        {myenrol}
                    </div>

                </div>


            </Aux>
        )

    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        fullname: state.auth.fullname,
        username: state.auth.username,
        group: (state.auth.group === 1) ? 'tutor' : 'student',
        authen: state.auth.authen,
        id: state.auth.id
    };
};

export default connect(mapStateToProps)(MyEnrolments);

