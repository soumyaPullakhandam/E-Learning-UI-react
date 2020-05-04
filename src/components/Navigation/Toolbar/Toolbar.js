import React, {Component} from 'react';
import {Navbar} from "react-bootstrap";
import logo from "../../../assets/images/E-Learning.png";
import './Toolbar.css';
import NavigationItems from "../NavigationItems/NavigationItems";
import {Redirect} from "react-router";
import {Link} from 'react-router-dom';
import axios from '../../../axios';


class Toolbar extends Component {

    state = {
        email: '',
        fullname: '',
        username: '',
        authen: false,
        group: 0
    }

    componentDidMount() {
        let email = localStorage.getItem('email'),
            token = localStorage.getItem('token');
        if (!!email && !!token) {
            axios.get('/user/')
                .then(response => {
                    const data = response.data[0];
                    this.setState({
                        email: data.email,
                        fullname: `${data.first_name} ${data.last_name}`,
                        username: data.username,
                        group : data.groups[0],
                        authen: true
                    });
                }).catch(error => {
                this.setState({message: error.message, showSignIn: 'visible'});
            });
        } else {
            this.setState({
                authen: false
            });
        }
    }


    render() {

        return (
            <Navbar className="navbar fixed-top navItemPadding navbar-light bg-light" collapseOnSelect expand="lg"
                    bg="dark"
                    variant="dark">
                {/*To display brand icon in toolbar*/}
                <Navbar.Brand>
                    <Link to='/'>
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            style={{borderRadius: '5px'}}
                            className="d-inline-block align-top"
                        />{' '}
                    </Link>
                </Navbar.Brand>
                <NavigationItems email={this.state.email}
                                 fullname={this.state.fullname}
                                 username={this.state.username}
                                 group={this.state.group}
                                 authen={this.state.authen}/>
            </Navbar>
        )
    };

}

export default Toolbar;


