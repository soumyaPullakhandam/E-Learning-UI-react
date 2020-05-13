import React, {Component} from 'react';
import Modal from "react-bootstrap/Modal";
import Aux from '../../Aux/Aux'
import icon from "../../../assets/images/E-Learning.png";
import Toast from "react-bootstrap/Toast";

class LoginModal extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render() {

        return (
            <Aux>
                <Modal show={this.props.show} animation={true} onHide={this.props.onModalClose}>
                    <Modal.Body>
                        <form className="needs-validation" onSubmit={this.props.onSubmit}>
                            <div className="text-center">
                                <img className="d-block mx-auto mb-4"
                                     src={icon}
                                     alt=""
                                     width="72"
                                     height="72"/>
                                <h2 className="text-info">Please sign in</h2>
                            </div>
                            <Toast show={this.props.toastShow} style={{maxWidth: '500px'}}>
                                <Toast.Body>{this.props.toastBody}</Toast.Body>
                            </Toast>
                            <hr className="mb-4"/>
                            <small id="passwordHelpInline" className="text-muted">
                                Please enter a valid credentials for sign-in.
                            </small>
                            <div className="mb-3">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">@</span>
                                    </div>
                                    <input type="text" className="form-control" id="email"
                                           placeholder="E-mail"
                                           required={true}
                                           name="email"
                                           value={this.props.email || ""}
                                           onChange={this.props.onChange}/>
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for sign-in.
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <svg className="bi bi-star-fill" width="1em"
                                                 height="1em" viewBox="0 0 16 16"
                                                 fill="currentColor"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                            </svg>
                                        </span>
                                    </div>
                                    <input type="password" className="form-control" id="password"
                                           placeholder="password"
                                           required={true}
                                           name="password"
                                           value={this.props.password || ""}
                                           onChange={this.props.onChange}/>
                                    <div className="invalid-feedback">
                                        Please enter password
                                    </div>
                                </div>
                            </div>
                            <hr className="mb-4"/>
                            <button className="btn btn-outline-success btn-light btn-block" type="submit"
                                    onClick={this.props.onModalSubmit}>
                                Sign in
                            </button>
                            <button className="btn btn-outline-secondary btn-light btn-block"
                                    onClick={(event) => this.props.onModalClose(event)}>
                                Close
                            </button>
                        </form>
                    </Modal.Body>
                </Modal>
                {this.props.children}
            </Aux>


        )
    }
};


export default LoginModal;