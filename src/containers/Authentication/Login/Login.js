import React, {Component} from 'react';
import axios from '../../../axios';
import LoginModal from '../../../hoc/UI/Modal/LoginModal';
import {Button} from "react-bootstrap";
import Aux from '../../../hoc/Aux/Aux';

class Login extends Component {
    state = {
        loginData: {
            username: '',
            email: '',
            password: '',
        },
        modal: {
            show: false,
            title: '',
            body: '',
            bodyCSS: ''
        },
        toast: {
            show: false,
            body: '',
        },
        error: ''
    }


    handleSubmit(event) {
        event.preventDefault();

        const regObj = {...this.state.loginData};
        regObj.username = regObj.email.split('@')[0];

        this.setState({
            loginData: regObj
        });

        axios.post('/rest-auth/login/', regObj)
            .then(response => {

                localStorage.setItem('token', response.data.key);
                localStorage.setItem('email', JSON.parse(response.config.data).email);
                this.onModalClose();

                window.location.href = window.location.origin;


            }).catch(error => {
            const errorMsg = Object.keys(error.response.data)
                .map(igKey => {
                    return error.response.data[igKey]
                }).reduce((sum, el) => {
                    return sum + el;
                }, '');

            this.setState({
                toast: {
                    show: true,
                    body: errorMsg,
                }
            })
        });
    }

    handleChange = (event) => {

        const name = event.target.name;
        const value = event.target.value;
        const data = {...this.state.loginData};

        data[name] = value;

        this.setState({
            loginData: data
        });
    };


    onModalClose = () => {
        this.setState({modal: {show: false}})
    }

    render() {


        let login_button = (
        <div className="header-btn ">
            <Button className="btn btn-primary btn-sm" onClick={() => {
                this.setState({modal: {show: true}})
            }}>Login</Button>{' '}
            </div>
        )

        return (
            <Aux>
                <LoginModal show={this.state.modal.show}
                            onModalClose={this.onModalClose}
                            onChange={this.handleChange}
                            onSubmit={(event) => this.handleSubmit(event)}
                            password={this.state.loginData.password}
                            email={this.state.loginData.email}
                            toastShow={this.state.toast.show}
                            toastBody={this.state.toast.body}>
                    {login_button}
                </LoginModal>
            </Aux>

        )
    }
}

export default Login