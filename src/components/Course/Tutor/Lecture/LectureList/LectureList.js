import React from "react";
import AlertModal from "../../../../../hoc/UI/Modal/Modal";
import Modal from "../../../../../hoc/UI/Modal/Modal";
import NewLecture from "../NewLecture/NewLecture";
// import CourseDetail from "../../../CourseDetail/CourseDetail";

const lectureList = (props) => {

    // let courseDetails = null;
    let selectedCourse = null;
    let lectures = null;
    let newlecture = null;
    if (!!props.topicdetails && props.topicdetails.hasOwnProperty('title')) {

        // courseDetails = (<CourseDetail title={props.topicdetails.title}
        //                                description={props.topicdetails.description}
        //                                key={props.topicdetails.id}
        //                                id={props.topicdetails.id}
        //                                authen={props.authen}
        //                                group={props.group}/>)


        selectedCourse = (

            // <Modal show={props.coursepreviewmodal.show}
            //        onModalClose={props.coursePreviewModalClose}
            //        body={courseDetails}
            //        bodyCSS={props.coursepreviewmodal.bodyCSS}
            //        title={'Course Preview'}
            //        submitVisiblity={'invisible'}
            //        closeVisiblity={'invisible'}
            //        footerVisibility={'invisible'}
            //        size={'lg'}>
            <div>
                <h6 className="text-success">{props.topicdetails.title}</h6>
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

            </div>

            // </Modal>
        );

        lectures = props.lectures.map(
            (lecture, index) => {
                return (<li key={lecture.id}
                            className="nav-link align-items-center d-flex justify-content-between list-group-item list-group-item-action" style={{backgroundColor : '#fcfcfc'}}>
                    {lecture.title}
                    <div className="btn-group btn-group-sm">
                        <button className="btn btn-outline-secondary" data-index={index}
                                onClick={(evt) => props.topicLecUpdate(evt)}>
                            <svg className="bi bi-brush not-active text-dark" width="15" height="15" viewBox="0 0 16 16"
                                 fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.213 1.018a.572.572 0 01.756.05.57.57 0 01.057.746C15.085 3.082 12.044 7.107 9.6 9.55c-.71.71-1.42 1.243-1.952 1.596-.508.339-1.167.234-1.599-.197-.416-.416-.53-1.047-.212-1.543.346-.542.887-1.273 1.642-1.977 2.521-2.35 6.476-5.44 7.734-6.411z"/>
                                <path
                                    d="M7 12a2 2 0 01-2 2c-1 0-2 0-3.5-.5s.5-1 1-1.5 1.395-2 2.5-2a2 2 0 012 2z"/>
                            </svg>
                        </button>
                        <button className="btn btn-outline-secondary" data-index={index}
                                onClick={(evt) => props.topicLecDelete(evt)}>
                            <svg className="bi bi-trash-fill  not-active text-dark" width="18" height="18"
                                 viewBox="0 0 16 16"
                                 fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M2.5 1a1 1 0 00-1 1v1a1 1 0 001 1H3v9a2 2 0 002 2h6a2 2 0 002-2V4h.5a1 1 0 001-1V2a1 1 0 00-1-1H10a1 1 0 00-1-1H7a1 1 0 00-1 1H2.5zm3 4a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zM8 5a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7A.5.5 0 018 5zm3 .5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7z"
                                      clipRule="evenodd"/>
                            </svg>
                        </button>
                    </div>

                </li>)

            });


        const newtopicbody = (<NewLecture title={props.mylec.title}
                                          description={props.mylec.description}
                                          onSubmit={(evt) => this.handleSubmit(evt)}
                                          change={(evt) => this.handleChange(evt)}/>);

        newlecture = (
            <AlertModal show={props.alertModal.show}
                        onModalClose={props.onAlertModalClose}
                        body={props.alertModal.body}
                        bodyCSS={props.alertModal.bodyCSS}
                        title={props.alertModal.title}
                        submitVisiblity={'invisible'}
                        closeVisiblity={'visible'}
                        footerVisibility={'visible'}
                        size={'lg'}>

                <Modal show={props.newlecmodal.show}
                       onModalClose={props.newLecModalClose}
                       body={newtopicbody}
                       bodyCSS={props.newlecmodal.bodyCSS}
                       title={'Create Lectures'}
                       submitVisiblity={'invisible'}
                       closeVisiblity={'invisible'}
                       footerVisibility={'invisible'}
                       size={'lg'}>
                    <h6 className="text-info">Lecture List</h6>
                    <li className="d-flex align-items-center text-info"
                        onClick={(evt) => props.newLecModalOpen(evt)}>
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
        <div className="d-none d-xl-block col-xl-5 col-md-6 col-8 Toc-SidePanel-module--cls">
            <div
                className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-white">
                {selectedCourse}
            </div>
            <div
                className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-white">
                {newlecture}
            </div>
            <div className="list-group nav flex-column mb-2">
                {lectures}
            </div>
        </div>
    )
};
export default lectureList;

