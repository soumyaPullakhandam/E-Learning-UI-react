import React, {Component} from 'react';
import Aux from "../../../../hoc/Aux/Aux";
import {connect} from "react-redux";
import "./Learn.css";
import axios from "../../../../axios";
import LearnTopic from "../../../../components/Course/Student/Learn/Topic/Topic";
import Progress from "../../../../components/Course/Student/Learn/Progress/Progress";



class Learn extends Component {
    state = {
        course: [],
        progress: {},
        numPages: null
    }


    componentDidMount() {

        if (this.props.match.params.id) {
            axios.get('/progress/?course=' + this.props.match.params.id)
                .then(response => {

                    const data = response.data;
                    if (data.length < 0) {
                        return
                    }

                    let course;
                    course = data[0].course;
                    course.topics = [...new Set(data.map(item => item.topic.id))].map(id => {
                        return {...data.find(s => s.topic.id === id)}.topic
                    });

                    course.topics
                        .map(obj => {
                            return obj.progresses = [...data.filter(s => s.topic.id === obj.id)]
                        });

                    this.setState({course: course})

                    const hash = this.props.location.hash;

                    this.getProgress(hash);

                }).catch(error => {
                this.setState({error: error})
            });

        }

    };

    componentDidUpdate(prevProps, prevState, snapshot) {

        const hash = this.props.location.hash;
        if (prevProps.location.hash !== hash) {
            this.getProgress(hash);
        }

    };

    getProgress = (hash) => {

        if (hash.search('#learn') >= 0) {
            let value = hash.split('/').pop();
            value = parseInt(value);
            if (this.state.course.hasOwnProperty('topics')) {

                const topics = this.state.course.topics;
                topics.find((topic) => {
                    topic.progresses.find((obj) => {
                        if (obj.lecture.id === value) {
                            this.setState({progress: obj})
                        }
                    });
                });
            }
        }

    };

    onDocumentLoadSuccess = ({numPages}) => {
        this.setState({numPages});
    };

    onProgress = (evt) => {
        let id = evt.target.dataset.id;
        id = parseInt(id);

        const checked = evt.target.checked;
        let obj = {completion: checked ? 1 : 2}

        axios.put('/progress/' + id + '/', obj)
            .then(response => {
            }).catch(error => {
        });

    }


    render() {

        let topics = null;
        let progress = null;


        if (this.state.course.hasOwnProperty('topics')) {
            topics = this.state.course.topics.map(
                topic => {
                    return <LearnTopic title={topic.title}
                                       description={topic.description}
                                       course={topic.course}
                                       progresses={topic.progresses}
                                       id={topic.id}
                                       key={topic.id}
                                       onProgress={this.onProgress}/>
                });

            if (this.state.progress && this.state.progress.hasOwnProperty('lectureFile')) {

                progress = (
                    <Progress progress={this.state.progress}

                              numPages={this.state.numPages}
                              onDocumentLoadSuccess={this.onDocumentLoadSuccess}/>)

            }

        }

        return (
            <Aux>
                <section>
                    <div className="container-fluid">
                        <div className="flex-xl-nowrap row">
                            <nav
                                className="sidebar navbar-expand-sm navbar-learn backgroud-default sidebar-sticky">

                                <button className="navbar-toggler collapsed " type="button"
                                        data-toggle="collapse"
                                        data-target="#navbar-learn" aria-controls="navbar-learn"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation">
                                    <span className="fas fa-bars text-white"/>
                                </button>


                                <div className="sidebar-nav-fixed " style={{marginTop: '0'}}>

                                    <div className="collapse navbar-collapse backgroud-default" id="navbar-learn">
                                        <button className="navbar-toggler collapsed" type="button"
                                                data-toggle="collapse"
                                                data-target="#navbar-learn" aria-controls="navbar-learn"
                                                aria-expanded="false"
                                                aria-label="Toggle navigation">
                                            <i className="fas fa-times text-white"/>
                                        </button>


                                        <div className="list-group flex-column mb-2">
                                            <div
                                                className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-white">
                                                <h5 className="text-info">{this.state.course.title}</h5>
                                            </div>
                                            {topics}
                                        </div>
                                    </div>
                                </div>
                            </nav>


                            <div className="Learn-SidePanel-module--cls col-xl-8 col-md-10 col-10">
                                {progress}
                            </div>
                        </div>
                    </div>
                </section>
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

export default connect(mapStateToProps)(Learn);

