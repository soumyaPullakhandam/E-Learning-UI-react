import React, {Component} from 'react';

import Aux from '../Aux/Aux'
import './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'

class Layout extends Component {
    state = {

    }

    render() {
        return (
            <Aux>
                <Toolbar/>
                <main className='Content'>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
};


export default Layout;