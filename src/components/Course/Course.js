import React from 'react';
import './Course.css'


const course = (props) => {
    let i = 0;
    let stars = [];
    while (i<5) {
        if(props.rating > i)
            stars.push(<span key={i} className="fa fa-star checked"/>)
        else stars.push(<span key={i} className="fa fa-star"/>)
        i++;
    }
    return (
        <div key={props.id} className="col PostCol mb-sm-2" onClick={props.clicked}>
            <div className="card border-light h-100 Post">
                <img style={{height: '120px', padding: '0.5rem'}} src={props.image} alt=""/>
                <div className="card-body PostCard-body">
                    <h6 className="card-title">{props.title}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">{props.author_name}</h6>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Price: {props.price}$ </small>
                    <span>
                        {stars}
                    </span>

                </div>
            </div>
        </div>

    )
};
export default course;