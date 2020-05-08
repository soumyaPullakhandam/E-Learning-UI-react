import React from "react";
import AlertModal from "../../../../../hoc/UI/Modal/Modal";
import Modal from "../../../../../hoc/UI/Modal/Modal";
import {Link} from "react-router-dom";
import Newcourse from "../NewCourse/NewCourse";

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
                <Link to="#" className="d-flex align-items-center text-muted"
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
            return (<Link to={ref} key={course.id} className="nav-link list-group-item-light list-group-item list-group-item-action">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                             viewBox="0 0 24 24" fill="none" stroke="currentColor"
                             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="feather feather-file-text">
                            <path
                                d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                            <polyline points="14 2 14 8 20 8"/>
                            <line x1="16" y1="13" x2="8" y2="13"/>
                            <line x1="16" y1="17" x2="8" y2="17"/>
                            <polyline points="10 9 9 9 8 9"/>
                        </svg>
                        {course.title}
                    </Link>)
            });


    return (
        <nav className="d-none d-md-block bg-light">
            <div className="sidebar-sticky">
                <div
                    className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
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

