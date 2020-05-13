import React from 'react';
import {Link} from "react-router-dom";


const learnlecture = (props) => {

    const path = '#learn/' + props.id;
    const completion = props.completion === 1;

    return (
        <div key={props.id}
             className="align-items-center d-flex list-group-item-light text-dark
                      justify-content-between list-group-item list-group-item-action">
            <Link to={path} className="list-group-item"
                  style={{backgroundColor: 'transparent', border: '0px solid rgba(30,24,53,.125)'}}>
                <h6>{props.title}</h6>
                <span><strong>{props.duration} mins </strong></span>
            </Link>

            <div
                className="mr-3 icon-shape icon-sm">
                <div className="custom-control custom-switch">
                    <input type="checkbox" checked={completion}
                           data-id={props.id}
                           onChange={props.onProgress}
                           className="custom-control-input" id={props.customSwitch}/>
                    <label className="custom-control-label" htmlFor={props.customSwitch}/>
                </div>
            </div>

        </div>

    )
};
export default learnlecture;