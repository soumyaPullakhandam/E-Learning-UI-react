import React, {Component} from 'react';
import Aux from '../../Aux/Aux';

import Toast from 'react-bootstrap/Toast';

class AlertToast extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }


    render() {
        return (
            <Aux>
                <Toast show={this.props.toastShow}>
                    <Toast.Body>{this.props.toastBody}</Toast.Body>
                </Toast>
                {this.props.children}
            </Aux>
        )
    }
};


export default AlertToast;