import React, {Component} from 'react';
import axios from '../../../axios';
import {Button} from "react-bootstrap";
import AlertModal from "../../../hoc/UI/Modal/AlertModal";

class Logout extends Component {
    state = {
        error: '',
        modal: {
            show: false,
            title: '',
            body: '',
            bodyCSS: ''
        },
    }


    handleSubmit = (event) => {
        event.preventDefault();

        axios.post('/rest-auth/logout/', {})
            .then(response => {
                debugger
                localStorage.removeItem('token');
                localStorage.removeItem('email');

                window.location.href = window.location.origin;

            }).catch(error => {
            const errorMsg = Object.keys(error.response.data)
                .map(igKey => {
                    return error.response.data[igKey]
                }).reduce((sum, el) => {
                    return sum + el;
                }, '');

            this.setState({
                modal: {
                    show: true,
                    body: errorMsg,
                    bodyCSS: 'text-error',
                    title: 'Logout Status'
                }
            })
        });
    }

    onModalClose = () => {
        this.setState({modal: {show: false}})
    }


    render() {

        let logout_button = (
            <Button variant="primary" onClick={(evt) => this.handleSubmit(evt)}>Logout</Button>
        )

        return (
            <AlertModal show={this.state.modal.show}
                        onModalClose={this.onModalClose}
                        body={this.state.modal.body}
                        bodyCSS={this.state.modal.bodyCSS}
                        title={this.state.modal.title}
                        submitVisiblity={'invisible'}>
                {logout_button}
            </AlertModal>

        )
    }
}

export default Logout