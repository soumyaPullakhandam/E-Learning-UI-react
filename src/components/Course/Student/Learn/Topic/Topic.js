import React from 'react';
import Aux from "../../../../../hoc/Aux/Aux";
import Learnlecture from "../Lecture/Lecture"

const learntopic = (props) => {

    let hashitem = "#item" + props.id;
    let item = "item" + props.id;

    let progresses;
    progresses = props.progresses.map(
        progress => {
            let customSwitch = 'switch' + progress.lecture.id;
            return <Learnlecture title={progress.lecture.title}
                                 description={progress.lecture.description}
                                 duration={progress.lecture.duration}
                                 lectureFileId={progress.lecture.lectureFile}
                                 courseId={progress.course.id}
                                 id={progress.lecture.id}
                                 key={progress.lecture.id}
                                 completion={progress.completion}
                                 onProgress={props.onProgress}
                                 customSwitch={customSwitch}/>

        });


    return (

        <Aux>
            <a key={props.id} href={hashitem} id={props.id}
               className="align-items-right d-flex list-group-item-light text-dark
                          list-group-item list-group-item-action"
               data-toggle="collapse">
                <div className="mr-3 icon-shape">
                    <i className="font-18 fas fa-angle-right"/>
                </div>
                <h6>{props.title}</h6>
            </a>
            <div key={props.id} className="list-group collapse  flex-column mb-2" id={item}>
                {progresses}
            </div>
        </Aux>

    )
};
export default learntopic;