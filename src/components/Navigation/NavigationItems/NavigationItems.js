import React from 'react';
import Aux from '../../../hoc/Aux/Aux'
import Categories from '../../../containers/Courses/Categories/Categories'

import {Button, Nav, Navbar} from "react-bootstrap";
import {NavLink} from 'react-router-dom';
import Login from "../../../containers/Authentication/Login/Login";

import Search from "../../../containers/Courses/Search/Search";
import Logout from "../../../containers/Authentication/Logout/Logout";

const navigationItems = (props) => {

    const myEnrolments = (props.authen && props.group === 'student') ? <NavLink to="/myenrolments"> <Button variant="dark">My Enrolments</Button></NavLink> : null;
    const myCourse = (props.authen && props.group === 'tutor') ? <NavLink to="/mycourses"> <Button variant="dark">My Courses</Button></NavLink> : null;

    const login = (props.authen) ? null : <Login/>;
    const reg = (props.authen) ? null : <NavLink to="/signup"> <Button variant="dark">Register</Button> </NavLink>;
    const logout = (props.authen) ? <Logout/> : null;

    return (
        <Aux>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Categories/>
                    <Search/>
                    {myEnrolments}
                    {myCourse}
                </Nav>

                <Nav>
                    <button type="button" className="btn btn-dark">
                        <span className="badge badge-info">{props.username}</span>
                    </button>
                    {login}
                    {reg}
                    {logout}
                </Nav>
            </Navbar.Collapse>

        </Aux>

    )


};
export default navigationItems;
