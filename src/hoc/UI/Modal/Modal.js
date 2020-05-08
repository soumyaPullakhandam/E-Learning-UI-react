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
                <Modal size={this.props.size} show={this.props.show} animation={true} onHide={this.props.onModalClose}>
                    <Modal.Header closeButton className="text-center">
                        <Modal.Title className="text-info">{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={this.props.bodyCSS}>{this.props.body}</Modal.Body>
                    <Modal.Footer className={this.props.footerVisibility}>
                        <Button className={this.props.submitVisiblity} variant="primary"
                                onClick={this.props.onModalSubmit}>
                            Submit
                        </Button>
                        <Button className={this.props.closeVisiblity} variant="secondary" onClick={this.props.onModalClose}>
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