import React, {Component} from 'react';
import axios from "../../../axios";
import NavigationDropdown from "../../../components/Navigation/NavigationItems/NavigationDropdown/NavigationDropdown";
import Aux from '../../../hoc/Aux/Aux'

class Categories extends Component {
    state = {
        cats: [],
        courses: []
    }

    componentDidMount() {
        console.log(this.props);
        axios.get('/learn/cat')
            .then(response => {
                this.setState({cats: response.data})
            }).catch(error => {
            this.setState({error: error})
        });
    };

    render() {
        let cats = <NavigationDropdown title="Something went wrong"/>
        if (!this.state.error) {
            cats = this.state.cats.map(
                cat => {
                    return <NavigationDropdown title={cat.title}
                                               description={cat.description}
                                               key={cat.id}
                                               id={cat.id}/>

                });
        }
        return (
            <Aux>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#categories" id="navbarDropdownMenuLink"
                             role="button"
                             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Categories
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        {cats}
                    </div>
                </li>
            </Aux>
        )

    }
}

export default Categories