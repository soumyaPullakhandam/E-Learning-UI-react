import React from "react";
import AlertModal from "../../../../../hoc/UI/Modal/Modal";
import Modal from "../../../../../hoc/UI/Modal/Modal";
import {Link} from "react-router-dom";
import Newcourse from "../NewCourse/NewCourse";
import './CourseList.css';

const courseList = (props) => {

    const newcoursebody = (<Newcourse title={props.mycourse.title}
                                      description={props.mycourse.description}
                                      language={props.mycourse.language}
                                      categories={props.mycourse.categories}
                                      image={props.mycourse.image}
                                      cats={props.cats}
                                      langs={props.langs}
                                      onSubmit={(evt) => props.handleNewCourseSubmit(evt)}
                                      change={(evt) => props.handleNewCourseChange(evt)}/>);

    const newcourse = (
        <AlertModal show={props.alertModal.show}
                    onModalClose={props.onAlertModalClose}
                    body={props.alertModal.body}
                    bodyCSS={props.alertModal.bodyCSS}
                    title={props.alertModal.title}
                    submitVisiblity={'invisible'}
                    closeVisiblity={'visible'}
                    footerVisibility={'visible'}
                    size={'lg'}>

            <Modal show={props.newcoursemodal.show}
                   onModalClose={props.newCourseModalClose}
                   body={newcoursebody}
                   bodyCSS={props.newcoursemodal.bodyCSS}
                   title={'Create course'}
                   submitVisiblity={'invisible'}
                   closeVisiblity={'invisible'}
                   footerVisibility={'invisible'}
                   size={'lg'}>
                <h6 className="text-info">Course List</h6>
                <Link to="#" className="d-flex align-items-center text-white"
                      onClick={(evt) => props.newCourseModalOpen(evt)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         strokeWidth="2"
                         strokeLinecap="round" strokeLinejoin="round"
                         className="feather feather-plus-circle">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="12" y1="8" x2="12" y2="16"/>
                        <line x1="8" y1="12" x2="16" y2="12"/>
                    </svg>
                </Link>
            </Modal>
        </AlertModal>
    );



    const courses = props.courses.map(
        course => {
            let ref = "#course/" + course.id;
            return (

                <AlertModal show={props.alertModal.show}
                            onModalClose={props.onAlertModalClose}
                            body={props.alertModal.body}
                            bodyCSS={props.alertModal.bodyCSS}
                            title={props.alertModal.title}
                            submitVisiblity={'invisible'}
                            closeVisiblity={'visible'}
                            footerVisibility={'visible'}
                            size={'lg'}>

                    <Modal show={props.updatecoursemodal.show}
                           onModalClose={props.updateCourseModalClose}
                           body={newcoursebody}
                           bodyCSS={props.updatecoursemodal.bodyCSS}
                           title={'Update course'}
                           submitVisiblity={'invisible'}
                           closeVisiblity={'invisible'}
                           footerVisibility={'invisible'}
                           size={'lg'}>
                        <Link to={ref} key={course.id}
                              className="nav-link align-items-center d-flex list-group-item-light text-dark  justify-content-between list-group-item list-group-item-action">
                            {course.title}
                            <div className="btn-group btn-group-sm">
                                <button className="btn btn-outline-secondary" data-id={course.id}
                                        onClick={(evt) => props.updateCourseModalOpen(evt)}>
                                    <svg className="bi bi-brush not-active text-dark" width="15" height="15"
                                         viewBox="0 0 16 16"
                                         fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M15.213 1.018a.572.572 0 01.756.05.57.57 0 01.057.746C15.085 3.082 12.044 7.107 9.6 9.55c-.71.71-1.42 1.243-1.952 1.596-.508.339-1.167.234-1.599-.197-.416-.416-.53-1.047-.212-1.543.346-.542.887-1.273 1.642-1.977 2.521-2.35 6.476-5.44 7.734-6.411z"/>
                                        <path
                                            d="M7 12a2 2 0 01-2 2c-1 0-2 0-3.5-.5s.5-1 1-1.5 1.395-2 2.5-2a2 2 0 012 2z"/>
                                    </svg>
                                </button>
                            </div>
                        </Link>
                    </Modal>
                </AlertModal>
            )
        });




    return (
        <nav className="d-none d-md-block backgroud-default">
            <div className="sidebar-sticky backgroud-default">
                <div
                    className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-white">
                    {newcourse}
                </div>
                <div className="list-group nav flex-column mb-2">
                    {courses}
                </div>
            </div>
        </nav>
    )
};
export default courseList;

