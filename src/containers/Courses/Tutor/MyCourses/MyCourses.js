import React, {Component} from 'react';
import Aux from "../../../../hoc/Aux/Aux";
import './MyCourses.css';
import CourseDetail from "../../../../components/Course/CourseDetail/CourseDetail";
import AlertModal from "../../../../hoc/UI/Modal/AlertModal";

class MyCourses extends Component {
    state = {}


    componentDidMount() {

    };


    render() {
        const newcourse = (<AlertModal show={false}
                                       // onModalClose={this.onModalClose}
                                       // body={this.state.modal.body}
                                       // bodyCSS={this.state.modal.bodyCSS}
                                       // title={this.state.modal.title}
                                       submitVisiblity={'invisible'}>
                                        <a className="d-flex align-items-center text-muted" href="#"
                                           aria-label="Add a new course">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                 strokeWidth="2"
                                                 strokeLinecap="round" strokeLinejoin="round"
                                                 className="feather feather-plus-circle">
                                                <circle cx="12" cy="12" r="10"/>
                                                <line x1="12" y1="8" x2="12" y2="16"/>
                                                <line x1="8" y1="12" x2="16" y2="12"/>
                                            </svg>
                                        </a>
                                    </AlertModal>);

        return (
            <Aux>
                <section>
                    <div className="container-fluid">
                        <div className="row">
                            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                                <div className="sidebar-sticky">
                                    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                        <span className="text-info">Course List</span>
                                        {newcourse}
                                    </h6>
                                    <ul className="nav flex-column mb-2">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
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
                                                Complete Python Bootcamp: Go from zero to hero in Python 3
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
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
                                                Java Programming Masterclass for Software Developers
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            </nav>

                            <main role="main" className="col-md-9 ml-sm-auto col-lg-10">

                                <div className="btn-toolbar mb-2 mb-md-0">
                                    <CourseDetail title={'title'}
                                                  description={'What you\'ll learn The course provides the entire toolbox you need to become a data scientist Fill up your resume with in demand data science skills: Statistical analysis, Python programming with NumPy, pandas, matplotlib, and Seaborn, Advanced statistical analysis, Tableau, Machine Learning with stats models and scikit-learn, Deep learning with TensorFlow'}
                                                  authorName={'tutor'}
                                                  duration={'1.5'}
                                                  languageName={'English'}
                                                  price={'30'}/>
                                </div>
                                <h2>Section title</h2>
                                <div className="table-responsive">


                                </div>
                            </main>

                        </div>
                    </div>
                </section>
            </Aux>
        )

    }
}

export default MyCourses