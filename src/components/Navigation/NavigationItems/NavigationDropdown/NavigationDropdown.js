import React from 'react';
import {Link} from 'react-router-dom';


const navigationDropdown = (props) => {
    let ref = "/#categories/" + props.title;
    return (
        // <Link className="dropdown-item" key={props.id} to={ref}>{props.title}</Link>

    <li className="dropdown-submenu ">
        <Link className="dropdown-item dropdown-list-group-item dropdown-toggle"
           key={props.id} to={ref}>
            <div className="d-flex align-items-center">
                <div
                    className="mr-3 icon-shape icon-sm rounded-circle bg-light">
                    <i className="font-18 fas fa-layer-group"/>
                </div>
                <div className="">
                    <h6 className="mr-3 mb-0 h5"> {props.title}</h6>
                    <p className="text-muted mb-0 font-12">
                        {props.description}
                    </p>
                </div>
            </div>
        </Link>
    </li>

)
};
export default navigationDropdown;
