import React, {Component} from 'react';
import Aux from "../../../../hoc/Aux/Aux";
import './MyCourses.css';
import axios from "../../../../axios";
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
        updatecoursemodal: {},
        alertModal: {},
        coursepreviewmodal: {},
        newtopicmodal: {},
        newlecmodal: {},
        deleteAlertModal: {},
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
        courseFlag: true,
        topicRefreshFlag: false
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
        if ((prevProps.location.hash !== hash) || this.state.topicRefreshFlag) {
            if ((hash.search('course') >= 0 && hash.search('topic') < 0) || this.state.topicRefreshFlag) {
                this.setState({topicRefreshFlag: false})
                this.loadCourseDetail(hash);
            } else if (hash.search('course') >= 0 && hash.search('topic') >= 0) {
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


    onDeleteAlertModalClose = () => {
        this.setState({deleteAlertModal: {show: false}})
    }

    onAlertModalClose = () => {
        this.setState({alertModal: {show: false}})
    };

    updateCourseModalOpen = (event) => {

        const courses = [...this.state.courses];
        const id = event.target.dataset.id;
        const course = courses.find(obj => obj.id === parseInt(id));

        this.setState({
            mycourse: course
        });

        this.setState({updatecoursemodal: {show: true}})
    };

    updateCourseModalClose = () => {
        this.setState({updatecoursemodal: {show: false}})
    };

    newCourseModalOpen = () => {
        this.setState({newcoursemodal: {show: true}})
        const newcourse = {
            title: '',
            description: '',
            language: '',
            categories: [],
            price: 0,
            image: null
        };

        this.setState({mycourse: newcourse})
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

    onTopicEdit = (event) => {


    };

    onTopicDeleteConfirm = (id) => {

        const path = "/learn/topic/" + id

        axios.delete(path)
            .then(response => {
                this.setState({topicRefreshFlag: true});
                this.onDeleteAlertModalClose();
            }).catch(error => {
            this.setState({error: error})
        });

    };

    onTopicDelete = (event) => {

        this.setState({
            deleteAlertModal: {
                show: true,
                bodyCSS: 'text-error',
                title: 'Course Status',
                size: 'sm'
            }
        })

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

    onTopicLecAdd = (evt) => {
        evt.preventDefault();
        let lec = {...this.state.lecture};
        const topic = {...this.state.mytopic};
        lec.topic = topic.id;
        topic.lectures.push(lec);

        this.setState({mytopic: topic});
        lec = {title: ''};
        this.setState({lecture: lec});

    };

    onTopicLecEdit = (evt) => {
        evt.preventDefault();
        let lec = {...this.state.lecture};
        const topic = {...this.state.mytopic};
        topic.lectures[lec.id] = {...lec};

        this.setState({mytopic: topic});
        lec = {title: ''};
        this.setState({lecture: lec});
    }

    onTopicLecUpdate = (evt) => {
        evt.preventDefault();
        const topic = {...this.state.mytopic};
        const index = evt.target.dataset.index;
        const lec = topic.lectures[index];

        lec.id = index;
        this.setState({
            lecture: lec
        });
    }

    onTopicLecDelete = (evt) => {
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


                            <CourseList courses={this.state.courses}

                                        mycourse={this.state.mycourse}
                                        cats={this.state.cats}
                                        langs={this.state.langs}

                                        updatecoursemodal={this.state.updatecoursemodal}
                                        updateCourseModalOpen={this.updateCourseModalOpen}
                                        updateCourseModalClose={this.updateCourseModalClose}

                                        newcoursemodal={this.state.newcoursemodal}
                                        newCourseModalOpen={this.newCourseModalOpen}
                                        newCourseModalClose={this.newCourseModalClose}

                                        alertModal={this.state.alertModal}
                                        onAlertModalClose={this.onAlertModalClose}

                                        handleNewCourseSubmit={(evt) => this.handleNewCourseSubmit(evt)}
                                        handleNewCourseChange={(evt) => this.handleNewCourseChange(evt)}/>


                            <TopicList topics={this.state.topics}
                                       coursedetails={this.state.coursedetails}
                                       mytopic={this.state.mytopic}
                                       lecture={this.state.lecture}
                                       classes={this.state.classes}

                                       deleteAlertModal={this.state.deleteAlertModal}
                                       onDeleteAlertModalClose={this.onDeleteAlertModalClose}

                                       alertModal={this.state.alertModal}
                                       onAlertModalClose={this.onAlertModalClose}

                                       newtopicmodal={this.state.newtopicmodal}
                                       newTopicModalOpen={this.newTopicModalOpen}
                                       newTopicModalClose={this.newTopicModalClose}

                                       coursepreviewmodal={this.state.coursepreviewmodal}
                                       coursePreviewModalOpen={this.coursePreviewModalOpen}
                                       coursePreviewModalClose={this.coursePreviewModalClose}

                                       onchangelecture={(evt) => this.onchangelecture(evt)}
                                       onchangetopic={(evt) => this.onchangetopic(evt)}
                                       handleNewTopicSubmit={(evt) => this.handleNewTopicSubmit(evt)}

                                       onTopicLecAdd={(evt) => this.onTopicLecAdd(evt)}
                                       onTopicLecEdit={(evt) => this.onTopicLecEdit(evt)}
                                       onTopicLecUpdate={(evt) => this.onTopicLecUpdate(evt)}
                                       onTopicLecDelete={(evt) => this.onTopicLecDelete(evt)}

                                       onchangelecUpload={(evt) => this.onchangelecUpload(evt)}
                                       onUploadSubmit={(evt => this.onUploadSubmit(evt))}
                                       onLecTopicSubmit={evt => this.onLecTopicSubmit(evt)}

                                       onTopicEdit={(evt) => this.onTopicEdit(evt)}
                                       onTopicDelete={(evt) => this.onTopicDelete(evt)}
                                       onTopicDeleteConfirm={(id) => this.onTopicDeleteConfirm(id)}

                            />


                            <LectureList lectures={this.state.lectures}
                                         alertModal={this.state.alertModal}
                                         topicdetails={this.state.topicdetails}
                                         mylec={this.state.mylec}
                                         newlecmodal={this.state.newlecmodal}
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
