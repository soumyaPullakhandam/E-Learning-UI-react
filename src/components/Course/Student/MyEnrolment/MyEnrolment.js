import React from 'react';
import './MyEnrolment.css'
import Rating from "react-rating";
import {Link} from 'react-router-dom';


const myenrolment = (props) => {
    const date = new Date(props.enrol_date).toDateString();
    const completion = parseInt(props.completion);
    const link = '/myenrolments/' + props.id;
    return (
        <div key={props.id} className="col-md-6">
            <div className="card flex-md-row mb-4 box-shadow h-md-250 border-enrol">
                <div className="card-body d-flex flex-column align-items-start">
                    <strong
                        className="text-info mb-3 font-14 d-inline-block font-weight-semi-bold ">{props.authorName}</strong>
                    <Link to={link}>
                        <h5 className="mb-3">
                            {props.title}
                        </h5>
                    </Link>
                    <div className="mb-3">
                        <div className="font-14">
                            <span className="mr-2">{date}</span>
                            <span className="text-success"> Rate here : </span>
                            <span> <Rating initialRating={props.rating} onClick={(rating,id) => props.onRatingClick(rating,props.id)} emptySymbol="fa fa-star" fullSymbol="fa fa-star checked"/></span>
                        </div>
                    </div>
                    <div className="mb-3" style={{width: "90%"}}>
                        <span className="mb-3">
                            {completion}% Completed
                        </span>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={props.completion}
                                 aria-valuemin="0" aria-valuemax="100" style={{width: props.completion}}>
                            </div>
                        </div>
                    </div>


                </div>
                <img className="card-img-right flex-auto d-none d-md-block"
                     alt="Thumbnail [200x250]"
                     style={{width: '200px', height: '250px', padding: '10px'}} src={props.image}
                    // src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20250%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_171faa6966c%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_171faa6966c%22%3E%3Crect%20width%3D%22200%22%20height%3D%22250%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2256.1953125%22%20y%3D%22131%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                     data-holder-rendered="true"/>
            </div>

        </div>

    )
};
export default myenrolment;