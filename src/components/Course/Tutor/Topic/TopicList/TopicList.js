import React from "react";
import AlertModal from "../../../../../hoc/UI/Modal/Modal";
import Modal from "../../../../../hoc/UI/Modal/Modal";
import {Link} from "react-router-dom";
import NewTopic from "../NewTopic/NewTopic";
import CourseDetail from "../../../CourseDetail/CourseDetail";

const topicList = (props) => {

    let courseDetails = null;
    let selectedCourse = null;
    let topics = null;
    let newtopic = null;
    if (!!props.coursedetails && props.coursedetails.hasOwnProperty('title')) {

        courseDetails = (<CourseDetail title={props.coursedetails.title}
                                       description={props.coursedetails.description}
                                       key={props.coursedetails.id}
                                       id={props.coursedetails.id}
                                       authorName={props.coursedetails.author_name}
                                       duration={props.coursedetails.duration}
                                       languageName={props.coursedetails.language_name}
                                       price={props.coursedetails.price}
                                       pubDate={props.coursedetails.pub_date}
                                       rating={props.coursedetails.rating}
                                       author={props.coursedetails.author}
                                       image={props.coursedetails.image}
                                       authen={props.authen}
                                       group={props.group}
                                       forPreview={'invisible'}/>)


        selectedCourse = (

            <Modal show={props.coursepreviewmodal.show}
                   onModalClose={props.coursePreviewModalClose}
                   body={courseDetails}
                   bodyCSS={props.coursepreviewmodal.bodyCSS}
                   title={'Course Preview'}
                   submitVisiblity={'invisible'}
                   closeVisiblity={'invisible'}
                   footerVisibility={'invisible'}
                   size={'lg'}>
                <h6 className="text-success">{props.coursedetails.title}</h6>
                <li className="d-flex align-items-center text-success"
                    onClick={(evt) => props.coursePreviewModalOpen(evt)}>
                    <svg className="bi bi-eye-fill" width="20" height="20" viewBox="0 0 18 18"
                         fill="currentColor"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5 8a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
                        <path fillRule="evenodd"
                              d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
                              clipRule="evenodd"/>
                    </svg>
                </li>
            </Modal>
        );

        topics = props.topics.map(
            (topic) => {
                let ref = '#course/' + props.coursedetails.id + "/topic/" + topic.id;
                return (<Link to={ref} key={topic.id}
                              className="nav-link align-items-center d-flex list-group-item-secondary text-dark justify-content-between list-group-item list-group-item-action">
                    {topic.title}
                    <div className="btn-group btn-group-sm">
                        <button className="btn btn-outline-secondary" data-id={topic.id}
                                onClick={(evt) => props.onTopicEdit(evt)}>
                            <svg className="bi bi-brush not-active text-dark" width="15" height="15"
                                 viewBox="0 0 16 16"
                                 fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.213 1.018a.572.572 0 01.756.05.57.57 0 01.057.746C15.085 3.082 12.044 7.107 9.6 9.55c-.71.71-1.42 1.243-1.952 1.596-.508.339-1.167.234-1.599-.197-.416-.416-.53-1.047-.212-1.543.346-.542.887-1.273 1.642-1.977 2.521-2.35 6.476-5.44 7.734-6.411z"/>
                                <path
                                    d="M7 12a2 2 0 01-2 2c-1 0-2 0-3.5-.5s.5-1 1-1.5 1.395-2 2.5-2a2 2 0 012 2z"/>
                            </svg>
                        </button>
                        <AlertModal show={props.deleteAlertModal.show}
                                    onModalClose={props.onDeleteAlertModalClose}
                                    onModalSubmit={(id) => props.onTopicDeleteConfirm(topic.id)}
                                    body={'Related lectures also will be delete. \n Are you sure?'}
                                    bodyCSS={props.deleteAlertModal.bodyCSS}
                                    title={'Topic Delete Alert'}
                                    submitVisiblity={'visible'}
                                    closeVisiblity={'visible'}
                                    footerVisibility={'visible'}
                                    size={'sm'}>
                            <button className="btn btn-outline-secondary" data-id={topic.id}
                                    onClick={(evt) => props.onTopicDelete(evt)}>
                                <svg className="bi bi-trash-fill  not-active text-dark" width="18" height="18"
                                     viewBox="0 0 16 16"
                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M2.5 1a1 1 0 00-1 1v1a1 1 0 001 1H3v9a2 2 0 002 2h6a2 2 0 002-2V4h.5a1 1 0 001-1V2a1 1 0 00-1-1H10a1 1 0 00-1-1H7a1 1 0 00-1 1H2.5zm3 4a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zM8 5a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7A.5.5 0 018 5zm3 .5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7z"
                                          clipRule="evenodd"/>
                                </svg>
                            </button>
                        </AlertModal>
                    </div>

                </Link>)

            });


        const newtopicbody = (<NewTopic title={props.mytopic.title}
                                        description={props.mytopic.description}
                                        lectures={props.mytopic.lectures}
                                        filepaths={props.mytopic.filepaths}
                                        lecture={props.lecture}
                                        classes={props.classes}
                                        onSubmit={(evt) => props.handleSubmit(evt)}
                                        change={(evt) => props.handleChange(evt)}
                                        onchangelecture={(evt) => props.onchangelecture(evt)}
                                        onchangetopic={(evt) => props.onchangetopic(evt)}
                                        onTopicLecAdd={(evt) => props.onTopicLecAdd(evt)}
                                        handleNewTopicSubmit={(evt) => props.handleNewTopicSubmit(evt)}
                                        onTopicLecUpdate={(evt) => props.onTopicLecUpdate(evt)}
                                        onTopicLecDelete={(evt) => props.onTopicLecDelete(evt)}
                                        onTopicLecEdit={(evt) => props.onTopicLecEdit(evt)}
                                        onchangelecUpload={(evt) => props.onchangelecUpload(evt)}
                                        onUploadSubmit={(evt) => props.onUploadSubmit(evt)}
                                        onLecTopicSubmit={evt => props.onLecTopicSubmit(evt)}/>);

        newtopic = (
            <AlertModal show={props.alertModal.show}
                        onModalClose={props.onAlertModalClose}
                        body={props.alertModal.body}
                        bodyCSS={props.alertModal.bodyCSS}
                        title={props.alertModal.title}
                        submitVisiblity={'invisible'}
                        closeVisiblity={'visible'}
                        footerVisibility={'visible'}
                        size={'lg'}>

                <Modal show={props.newtopicmodal.show}
                       onModalClose={props.newTopicModalClose}
                       body={newtopicbody}
                       bodyCSS={props.newtopicmodal.bodyCSS}
                       title={'Create topic'}
                       submitVisiblity={'invisible'}
                       closeVisiblity={'invisible'}
                       footerVisibility={'invisible'}
                       size={'lg'}>
                    <h6 className="text-info">Topic List</h6>
                    <li className="d-flex align-items-center text-info"
                        onClick={(evt) => props.newTopicModalOpen(evt)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                             viewBox="0 0 24 24" fill="none" stroke="currentColor"
                             strokeWidth="2"
                             strokeLinecap="round" strokeLinejoin="round"
                             className="feather feather-plus-circle">
                            <circle cx="12" cy="12" r="10"/>
                            <line x1="12" y1="8" x2="12" y2="16"/>
                            <line x1="8" y1="12" x2="16" y2="12"/>
                        </svg>
                    </li>
                </Modal>
            </AlertModal>
        );
    }

    return (
        <div className="Main-styles-module--main col-xl-5 col-md-6 col-8">
            <div
                className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-white">
                {selectedCourse}
            </div>
            <div
                className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-white">
                {newtopic}
            </div>
            <div className="list-group nav flex-column mb-2">
                {topics}
            </div>
        </div>
    )
};
export default topicList;

