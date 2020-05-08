import React, {Component} from 'react';
import Aux from "../../../../hoc/Aux/Aux";
import './MyCourses.css';
import axios from "../../../../axios";
// import axios from 'axios';
import {connect} from "react-redux";
import CourseList from '../../../../components/Course/Tutor/Course/CourseList/CourseList';
import TopicList from "../../../../components/Course/Tutor/Topic/TopicList/TopicList";
import LectureList from "../../../../components/Course/Tutor/Lecture/LectureList/LectureList";

class MyCourses extends Component {
    state = {
        modal: {
            show: false,
            title: '',
            body: '',
            bodyCSS: '',
            size: ''
        },
        newcoursemodal: {},
        alertModal: {},
        coursepreviewmodal: {},
        newtopicmodal: {},
        newlecmodal: {},
        mycourse: {
            title: '',
            description: '',
            language: '',
            categories: [],
            price: 0,
            image: null
        },
        mytopic: {
            title: '',
            description: '',
            lectures: []
        },
        mylec: {
            title: '',
            description: '',
            language: '',
        },
        cats: [],
        langs: [],
        courses: [],
        topics: [],
        lectures: [],
        lecture: {
            title: ''
        },
        coursedetails: {},
        topicdetails: {},
        classes: {
            topic: "nav-link active",
            upload: "nav-link disabled",
            lecture: "nav-link disabled",
            topicdiv: "tab-pane fade show active",
            uploaddiv: "tab-pane fade",
            lecturediv: "tab-pane fade",
        },
        courseFlag: true
    }


    componentDidMount() {
        axios.get('/learn/cat')
            .then(response => {
                this.setState({cats: response.data})
            }).catch(error => {
            this.setState({error: error})
        });

        axios.get('/user/lang')
            .then(response => {
                this.setState({langs: response.data})
            }).catch(error => {
            this.setState({error: error})
        });


    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.courseFlag) {
            this.setState({courseFlag: false});
            axios.get('/learn/course/?author=' + this.props.id)
                .then(response => {
                    this.setState({courses: response.data});
                    if (this.props.location && this.props.location.hash)
                        this.loadCourseDetail(this.props.location.hash);
                }).catch(error => {
                this.setState({error: error})
            });
        }

        const hash = this.props.location.hash;
        if (prevProps.location.hash !== hash) {
            if (hash.search('course') >= 0 && hash.search('topic') < 0)
                this.loadCourseDetail(hash);
            else if (hash.search('course') >= 0 && hash.search('topic') >= 0) {
                this.loadTopicDetail(hash);
            }
        }
    };

    loadTopicDetail = (hash) => {
        const topics = [...this.state.topics];
        const id = hash.split('/')[3];
        const topicdetails = topics.find(function (obj) {
            return obj.id === parseInt(id)
        });
        this.setState({topicdetails: topicdetails});
        this.setState({lectures: topicdetails.lectures});
    }

    loadCourseDetail = (hash) => {
        const courses = [...this.state.courses];
        const id = hash.split('/')[1];
        const coursedetails = courses.find(function (obj) {
            return obj.id === parseInt(id)
        });
        this.setState({coursedetails: coursedetails});

        axios.get('/learn/batch/?course=' + parseInt(id))
            .then(response => {
                this.setState({topics: response.data});
                this.loadTopicDetail(hash);

            }).catch(error => {
            this.setState({error: error})
        });
    }

    onModalClose = () => {
        this.setState({modal: {show: false}})
    };

    onAlertModalClose = () => {
        this.setState({alertModal: {show: false}})
    };

    newCourseModalOpen = () => {
        this.setState({newcoursemodal: {show: true}})
    };

    newCourseModalClose = () => {
        this.setState({newcoursemodal: {show: false}})
    };

    newTopicModalOpen = () => {
        this.setState({newtopicmodal: {show: true}})
    };

    newTopicModalClose = () => {
        this.setState({newtopicmodal: {show: false}})
    };

    newLecModalOpen = () => {
        this.setState({newlecmodal: {show: true}})
    };

    newLecModalClose = () => {
        this.setState({newlecmodal: {show: false}})
    };

    coursePreviewModalOpen = () => {
        this.setState({coursepreviewmodal: {show: true}})
    };

    coursePreviewModalClose = () => {
        this.setState({coursepreviewmodal: {show: false}})
    };

    onchangelecture = (event) => {
        let name = event.target.name;
        const data = {...this.state.lecture};
        data[name] = event.target.value;

        this.setState({
            lecture: data
        });
    };

    onchangetopic = (evt) => {
        let name = evt.target.name;
        const data = {...this.state.mytopic};

        data[name] = evt.target.value;

        this.setState({
            mytopic: data
        });
    };

    onchangelecUpload = (evt) => {
        const topic = {...this.state.mytopic};
        let uploadedFiles = [];

        for (var i = 0; i < evt.target.files.length; i++) {
            uploadedFiles.push(evt.target.files[i])
        }

        topic.lecUpload = uploadedFiles;

        this.setState({
            mytopic: topic
        });

    };

    onLecSubmit = (evt) => {
        evt.preventDefault();
        let lec = {...this.state.lecture};
        const topic = {...this.state.mytopic};
        lec.topic = topic.id;
        topic.lectures.push(lec);

        this.setState({mytopic: topic});
        lec = {title: ''};
        this.setState({lecture: lec});

    };

    onLecUpdate = (evt) => {
        evt.preventDefault();
        let lec = {...this.state.lecture};
        const topic = {...this.state.mytopic};
        topic.lectures[lec.id] = {...lec};

        this.setState({mytopic: topic});
        lec = {title: ''};
        this.setState({lecture: lec});
    }

    topicLecUpdate = (evt) => {
        evt.preventDefault();
        const topic = {...this.state.mytopic};
        const index = evt.target.dataset.index;
        const lec = topic.lectures[index];

        lec.id = index;
        this.setState({
            lecture: lec
        });
    }

    topicLecDelete = (evt) => {
        evt.preventDefault();
        const topic = {...this.state.mytopic};
        const index = evt.target.dataset.index;
        topic.lectures.splice(index, 1);
        const lec = {title: ''};

        this.setState({
            lecture: lec
        });

        this.setState({mytopic: topic});
    }


    handleNewCourseChange = (event) => {
        let name = event.target.name;
        const data = {...this.state.mycourse};
        let value;

        switch (name) {
            case 'image':
                value = event.target.files[0];
                data[name] = value;
                break;
            case 'categories':
                value = event.target.selectedOptions;
                data[name] = value;
                break;
            default:
                value = event.target.value;
                data[name] = value;
        }

        this.setState({
            mycourse: data
        });
    };

    handleNewTopicSubmit = (event) => {

        event.preventDefault();

        const topics = {...this.state.mytopic};

        const hash = this.props.location.hash;
        topics.course = hash.split('/')[1];

        axios.post('/learn/topic/', topics)
            .then(response => {

                this.setState({
                    classes: {
                        topic: "nav-link disabled",
                        upload: "nav-link active",
                        lecture: "nav-link disabled",
                        topicdiv: "tab-pane fade",
                        uploaddiv: "tab-pane fade show active",
                        lecturediv: "tab-pane fade",
                    },
                });

                const topics = {...this.state.mytopic};
                topics.id = response.data.id

                this.setState({
                    mytopic: topics
                });

            }).catch(error => {
            if (error.response && error.response.data) {
                const errorMsg = Object.keys(error.response.data)
                    .map(igKey => {
                        return error.response.data[igKey]
                    }).reduce((sum, el) => {
                        return sum + el;
                    }, '');

                this.setState({
                    alertModal: {
                        show: true,
                        body: errorMsg,
                        bodyCSS: 'text-error',
                        title: 'Course Status',
                        size: 'sm'
                    }
                })

            }

        });
    };

    getUploadedFiles = (course, topic) => {
        const path = "learn/lecturefile/?course=" + course + "&topic=" + topic + ""
        axios.get(path)
            .then(response => {
                const mytopic = {...this.state.mytopic};
                mytopic.filepaths = response.data;
                this.setState({mytopic: mytopic})
            }).catch(error => {
            this.setState({error: error})
        });

    };

    onUploadSubmit = (event) => {

        event.preventDefault();

        const topics = {...this.state.mytopic};

        const hash = this.props.location.hash;
        topics.course = hash.split('/')[1];

        let data = new FormData();

        topics.lecUpload.forEach((obj) => {
            data.append('lecture_file', obj)
        })

        data.append('course', topics.course)
        data.append('topic', topics.id)


        axios.post('/learn/lecturefile/', data)
            .then(response => {

                this.setState({
                    classes: {
                        topic: "nav-link disabled",
                        upload: "nav-link disabled",
                        lecture: "nav-link active",
                        topicdiv: "tab-pane fade",
                        uploaddiv: "tab-pane fade",
                        lecturediv: "tab-pane fade show active",
                    },
                });
                const topics = {...this.state.mytopic};
                let course = this.props.location.hash.split('/')[1];
                course = parseInt(course)
                const topic = topics.id;

                this.getUploadedFiles(course, topic);

            }).catch(error => {
            if (error.response && error.response.data) {
                const errorMsg = Object.keys(error.response.data)
                    .map(igKey => {
                        return error.response.data[igKey]
                    }).reduce((sum, el) => {
                        return sum + el;
                    }, '');

                this.setState({
                    alertModal: {
                        show: true,
                        body: errorMsg,
                        bodyCSS: 'text-error',
                        title: 'Course Status',
                        size: 'sm'
                    }
                })

            }

        });


    };


    onLecTopicSubmit = event => {
        debugger

        event.preventDefault();

        const topics = {...this.state.mytopic};

        const hash = this.props.location.hash;
        topics.course = hash.split('/')[1];



         axios.post('/learn/batch/', topics)
            .then(response => {
                this.setState({
                    newtopicmodal: {
                        show: false
                    }
                });
                this.setState({
                    alertModal: {
                        show: true,
                        body: 'Created successfully',
                        bodyCSS: 'text-success',
                        title: 'New Topic Status',
                        size: 'sm'
                    }
                })
                this.props.history.push('/mycourses')



            }).catch(error => {
            if (error.response && error.response.data) {
                const errorMsg = Object.keys(error.response.data)
                    .map(igKey => {
                        return error.response.data[igKey]
                    }).reduce((sum, el) => {
                        return sum + el;
                    }, '');

                this.setState({
                    alertModal: {
                        show: true,
                        body: errorMsg,
                        bodyCSS: 'text-error',
                        title: 'Course Status',
                        size: 'sm'
                    }
                })

            }

        });


    };


    handleNewCourseSubmit(event) {

        event.preventDefault();

        const regObj = {...this.state.mycourse};
        let cats = [];
        for (let i = 0; i < regObj.categories.length; i++) {
            cats.push(regObj.categories[i].value)
        }

        regObj.categories = cats;

        const data = new FormData();
        data.append('image', regObj.image);
        data.append('title', regObj.title);
        data.append('description', regObj.description);
        data.append('language', regObj.language);
        data.append('categories', regObj.categories);
        data.append('price', regObj.price);

        axios.post('/learn/course/create/', data)
            .then(response => {
                this.setState({
                    newcoursemodal: {
                        show: false
                    }
                });
                this.setState({
                    alertModal: {
                        show: true,
                        body: 'Created successfully',
                        bodyCSS: 'text-success',
                        title: 'New course Status',
                        size: 'sm'
                    }
                })
                this.props.history.push('/mycourses')
            }).catch(error => {
            const errorMsg = Object.keys(error.response.data)
                .map(igKey => {
                    return error.response.data[igKey]
                }).reduce((sum, el) => {
                    return sum + el;
                }, '');

            this.setState({
                alertModal: {
                    show: true,
                    body: errorMsg,
                    bodyCSS: 'text-error',
                    title: 'Course Status',
                    size: 'sm'
                }
            })
        });
    };


    render() {


        return (
            <Aux>
                <section>
                    <div className="container-fluid">
                        <div className="flex-xl-nowrap row">


                            <CourseList mycourse={this.state.mycourse}
                                        alertModal={this.state.alertModal}
                                        newcoursemodal={this.state.newcoursemodal}
                                        courses={this.state.courses}
                                        newCourseModalOpen={this.newCourseModalOpen}
                                        cats={this.state.cats}
                                        langs={this.state.langs}
                                        newCourseModalClose={this.newCourseModalClose}
                                        onAlertModalClose={this.onAlertModalClose}
                                        handleNewCourseSubmit={(evt) => this.handleNewCourseSubmit(evt)}
                                        handleNewCourseChange={(evt) => this.handleNewCourseChange(evt)}/>


                            <TopicList topics={this.state.topics}
                                       alertModal={this.state.alertModal}
                                       coursedetails={this.state.coursedetails}
                                       mytopic={this.state.mytopic}
                                       lecture={this.state.lecture}
                                       newtopicmodal={this.state.newtopicmodal}
                                       coursepreviewmodal={this.state.coursepreviewmodal}
                                       classes={this.state.classes}
                                       newCourseModalOpen={this.newCourseModalOpen}
                                       newCourseModalClose={this.newCourseModalClose}
                                       onAlertModalClose={this.onAlertModalClose}
                                       handleNewCourseSubmit={(evt) => this.handleNewCourseSubmit(evt)}
                                       handleNewCourseChange={(evt) => this.handleNewCourseChange(evt)}
                                       newTopicModalOpen={this.newTopicModalOpen}
                                       newTopicModalClose={this.newTopicModalClose}
                                       coursePreviewModalOpen={this.coursePreviewModalOpen}
                                       coursePreviewModalClose={this.coursePreviewModalClose}
                                       onchangelecture={(evt) => this.onchangelecture(evt)}
                                       onchangetopic={(evt) => this.onchangetopic(evt)}
                                       onLecSubmit={(evt) => this.onLecSubmit(evt)}
                                       handleNewTopicSubmit={(evt) => this.handleNewTopicSubmit(evt)}
                                       onLecUpdate={(evt) => this.onLecUpdate(evt)}
                                       topicLecUpdate={(evt) => this.topicLecUpdate(evt)}
                                       topicLecDelete={(evt) => this.topicLecDelete(evt)}
                                       onchangelecUpload={(evt) => this.onchangelecUpload(evt)}
                                       onUploadSubmit={(evt => this.onUploadSubmit(evt))}
                                       onLecTopicSubmit={evt => this.onLecTopicSubmit(evt)}/>


                            <LectureList lectures={this.state.lectures}
                                         alertModal={this.state.alertModal}
                                         topicdetails={this.state.topicdetails}
                                         mylec={this.state.mylec}
                                         newlecmodal={this.state.newlecmodal}
                                         coursepreviewmodal={this.state.coursepreviewmodal}
                                         onAlertModalClose={this.onAlertModalClose}
                                         newLecModalOpen={this.newLecModalOpen}
                                         newLecModalClose={this.newLecModalClose}/>

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

export default connect(mapStateToProps)(MyCourses);
