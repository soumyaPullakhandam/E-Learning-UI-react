import React from "react";

import {Document, Page} from "react-pdf/dist/entry.webpack";
import video from "video.js";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import Aux from "../../../../../hoc/Aux/Aux"
import Rating from "react-rating";


const progress = (props) => {

    const lectureFile = props.progress.lectureFile;
    const fileType = lectureFile.split('.').pop();

    const numPages = props.numPages;
    const date = new Date(props.progress.course.pub_date).toDateString();
    const duration = (props.progress.course.duration / 60).toFixed(2);

    let displayFile = fileType === "pdf" ?
        (<Document
            file={lectureFile}
            onLoadSuccess={props.onDocumentLoadSuccess}
            className="container Doc-SidePanel-module--cls">

            {Array.from(
                new Array(numPages),
                (el, index) => (
                    <Page width={850} height={900}
                          key={`page_${index + 1}`}
                          pageNumber={index + 1}
                    />
                ),
            )}
        </Document>) :
        (<video className="video-js vjs-theme-city"
                preload="auto"
                autoPlay={false}
                loop={false}
                controls={true}
                style={{width: '100%', height: '50%'}}
                src={lectureFile}/>);


    return (
        <Aux>
            <div className="container">

                <div>
                    <h4 className="text-info">{props.progress.lecture.title}</h4>
                </div>
                <div>
                    {displayFile}
                </div>
            </div>
            <div className="container">

                <div className="list-group flex-column mb-2">
                    <div
                        className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-white">
                        <h5 className="text-success">About this course:</h5>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">

                        <div className="card">
                            <div className="card-body align-items-center">
                                <span className="fas fa-user-edit text-info"/><strong
                                className="text-info mb-3 font-20 d-inline-block font-weight-semi-bold ">{props.progress.course.author_name}</strong>

                                <h5 className="mb-3">{props.progress.course.title}</h5>
                                <span className="mb-3 card-text">{props.progress.course.description}</span>
                                <div className="mb-3">
                                    <span style={{color: '#ff5938!important'}}
                                        className="far fa-calendar-alt text-primary text-left mr-3 text-code"> Published On: {date} </span>
                                    <span
                                        className="fas fa-language mr-10"> Languge: {props.progress.course.language_name} </span>
                                    <span> Rating: <Rating initialRating={props.progress.course.rating} readonly={true}
                                                           emptySymbol="fa fa-star"
                                                           fullSymbol="fa fa-star checked"/></span>
                                    <span className="far fa-clock text-left ml-3"> Duration: {duration} hours </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className="container">

                <div className="list-group flex-column mb-2">
                    <div
                        className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-white">
                        <h5 className="text-success">About this topic:</h5>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">

                        <div className="card">
                            <div className="card-body align-items-center">
                                <h5 className="mb-3">{props.progress.topic.title}</h5>
                                <span className="mb-3 card-text">{props.progress.topic.description}</span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </Aux>


    )

};

export default progress;



