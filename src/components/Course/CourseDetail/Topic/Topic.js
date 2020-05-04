import React from 'react';
import {Table} from "react-bootstrap";
import Lecture from '../Lecture/Lecture';
import Card from "react-bootstrap/Card";


const topic = (props) => {

    let hashCollapse = "#collapse" + props.id;
    let collapse = "collapse" + props.id;
    let header = "heading" + props.id;
    let accordion = "accordion" + props.id;
    let hashAccordion = "#accordion" + props.id;
    let numLecture = props.lectures.length + " Lectures";

    let lectures;
    lectures = props.lectures.map(
        lecture => {
            return <Lecture hashCollapse={hashCollapse}
                            collapse={collapse}
                            header={header}
                            accordion={accordion}
                            hashAccordion={hashAccordion}
                            numLecture={numLecture}
                            title={lecture.title}
                            description={lecture.description}
                            duration={lecture.duration}
                            resFile={lecture.res_file}
                            id={lecture.id}
                            key={lecture.id}/>

        });


    return (

        <Card key={props.id} id={accordion} className="">
            <Card.Header>
                <Table className="mb-0" size="sm">
                    <tbody>
                    <tr id={header} data-toggle="collapse" data-target={hashCollapse}>
                        <td className="border-0">{props.title}</td>
                        <td className="border-0 text-right ">

                            <svg className="bi bi-file-text" width="1.3em" height="1.5em" viewBox="0 0 16 16"
                                 style={{marginRight: '0.3rem'}}
                                 fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M4 1h8a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V3a2 2 0 012-2zm0 1a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V3a1 1 0 00-1-1H4z"
                                      clipRule="evenodd"/>
                                <path fillRule="evenodd"
                                      d="M4.5 10.5A.5.5 0 015 10h3a.5.5 0 010 1H5a.5.5 0 01-.5-.5zm0-2A.5.5 0 015 8h6a.5.5 0 010 1H5a.5.5 0 01-.5-.5zm0-2A.5.5 0 015 6h6a.5.5 0 010 1H5a.5.5 0 01-.5-.5zm0-2A.5.5 0 015 4h6a.5.5 0 010 1H5a.5.5 0 01-.5-.5z"
                                      clipRule="evenodd"/>
                            </svg>
                            {numLecture}
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </Card.Header>
            <div id={collapse} className="collapse" role="tabpanel"
                 aria-labelledby={header} data-parent={hashAccordion}>
                <Card.Body>
                    <Table className="mb-0" size="sm" bordered responsive>
                        <tbody>
                        {lectures}
                        </tbody>
                    </Table>
                </Card.Body>
            </div>
        </Card>

    )
};
export default topic;