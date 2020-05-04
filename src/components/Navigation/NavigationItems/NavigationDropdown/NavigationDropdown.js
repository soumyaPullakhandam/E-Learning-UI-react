import React from 'react';
import {Link} from 'react-router-dom';


const navigationDropdown = (props) => {
    let ref = "/#categories/" + props.title;
    return (
        <Link className="dropdown-item" key={props.id} to={ref}>{props.title}</Link>

    )
};
export default navigationDropdown;
