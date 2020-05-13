import React from 'react';
import Aux from '../../../hoc/Aux/Aux'
import Categories from '../../../containers/Courses/Categories/Categories'

import {Link} from 'react-router-dom';
import Login from "../../../containers/Authentication/Login/Login";

import Logout from "../../../containers/Authentication/Logout/Logout";

const navigationItems = (props) => {

    const myEnrolments = (props.authen && props.group === 'student') ?
        <li className="nav-item dropdown">
            <Link to="/myenrolments" className="nav-link">My Enrolments</Link>
        </li> : null;
    const myCourse = (props.authen && props.group === 'tutor') ?
        <li className="nav-item dropdown">
            <Link to="/mycourses" className="nav-link">My Courses</Link>
        </li> : null;

    const login = (props.authen) ? null : <Login/>;

    const reg = (props.authen) ? null :
        <div className="header-btn">
            <Link className="btn btn-primary btn-sm ml-3" to="/signup">
                Register
            </Link>
        </div>;

    const logout = (props.authen) ? <Logout/> : null;


    return (
        <Aux>
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
                    data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="icon-bar top-bar mt-0"/>
                <span className="icon-bar middle-bar"/>
                <span className="icon-bar bottom-bar"/>
            </button>
            <div className="collapse navbar-collapse" id="navbar-default">
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
                        data-target="#navbar-default" aria-controls="navbar-default"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <i className="fas fa-times"/>
                </button>
                <ul className="navbar-nav ml-auto mr-lg-3 ">
                    <Categories/>
                    {myEnrolments}
                    {myCourse}

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#  " id="menu-3"
                           data-toggle="dropdown"
                           aria-haspopup="true" aria-expanded="false">
                            {props.username}
                        </a>
                        <ul className="dropdown-menu dropdown-menu-arrow dropdown-menu-right dropdown-menu-xl-left "
                            aria-labelledby="menu-3">
                            <li>
                                <Link className="dropdown-item" to="/myprofile">
                                    My Profile
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/contactus">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#  ">
                                    {logout}
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                {login}
                {reg}

            </div>

            {/*<Navbar.Toggle aria-controls="responsive-navbar-nav"/>*/}
            {/*<Navbar.Collapse id="responsive-navbar-nav">*/}
            {/*    <Nav className="mr-auto">*/}
            {/*        <Categories/>*/}
            {/*        <Search/>*/}
            {/*        {myEnrolments}*/}
            {/*        {myCourse}*/}
            {/*    </Nav>*/}

            {/*    <Nav>*/}
            {/*        <button type="button" className="btn btn-dark">*/}
            {/*            <span className="badge badge-info">{props.username}</span>*/}
            {/*        </button>*/}
            {/*        {login}*/}
            {/*        {reg}*/}
            {/*        {logout}*/}
            {/*    </Nav>*/}
            {/*</Navbar.Collapse>*/}

        </Aux>

    )


};
export default navigationItems;
