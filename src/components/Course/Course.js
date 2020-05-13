import React from 'react';
import './Course.css'
import Rating from "react-rating";


const course = (props) => {

    return (
        <div key={props.id} className="col PostCol mb-4" onClick={props.clicked}>
            <div className="card border-light h-100 Post">
                <img style={{height: '120px', padding: '0.5rem'}} src={props.image} alt=""/>
                <div className="card-body PostCard-body">
                    <h6 className="card-title">{props.title}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">{props.author_name}</h6>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Price: {props.price}$ </small>
                    <span className="my-2">
                         <Rating initialRating={props.rating} emptySymbol="fa fa-star"
                                 fullSymbol="fa fa-star checked" readonly={true}/>
                    </span>

                </div>
            </div>
        </div>

    )
};
export default course;