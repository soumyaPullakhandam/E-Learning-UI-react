import React, {Component} from 'react';
import {Navbar} from "react-bootstrap";
import logo from "../../../assets/images/E-Learning.png";
import './Toolbar.css';
import NavigationItems from "../NavigationItems/NavigationItems";
import {Link} from 'react-router-dom';
import * as actions from '../../../store/actions/index';
import { connect } from 'react-redux';



class Toolbar extends Component {

    state = {
    }

    componentDidMount() {
        this.props.onAuth();
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
                <NavigationItems email={this.props.email}
                                 fullname={this.props.fullname}
                                 username={this.props.username}
                                 group={this.props.group}
                                 authen={this.props.authen}/>
            </Navbar>
        )
    };

}


const mapStateToProps = state => {
    return {
        email: state.auth.email,
        fullname: state.auth.fullname,
        username : state.auth.username,
        group : (state.auth.group === 1) ? 'tutor' : 'student',
        authen : state.auth.authen,
        id: state.auth.id
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: () => dispatch(actions.auth()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);


