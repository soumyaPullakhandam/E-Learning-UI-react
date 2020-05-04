import React, {Component} from 'react';
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import Aux from '../../Aux/Aux';

class AlertModal extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }


    render() {


        return (
            <Aux>
                <Modal show={this.props.show} animation={true} onHide={this.props.onModalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title className="text-info">{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={this.props.bodyCSS}>{this.props.body}</Modal.Body>
                    <Modal.Footer>
                        <Button className={this.props.submitVisiblity} variant="primary"
                                onClick={this.props.onModalSubmit}>
                            Submit
                        </Button>
                        <Button className="visible" variant="secondary" onClick={this.props.onModalClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                {this.props.children}
            </Aux>


        )
    }
};


export default AlertModal;