import React from 'react';
import './CourseDetail.css'
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";


const courseDetail = (props) => {
    let pubDate = new Date(props.pubDate);
    let UpdatedDate = (pubDate.getMonth() + 1) + '/' + pubDate.getFullYear();

    let star = 0;
    let stars = [];
    while (star < 5) {
        if (props.rating > star)
            stars.push(<span key={star} className="fa fa-star checked"/>)
        else stars.push(<span key={star} className="fa fa-star"/>)
        star++;
    }

    let duration = (props.duration / 60).toFixed(1);

    return (<div>

            <div key={props.id} className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
                <Container>
                    <div className="row">

                        <div className="col-md-8 px-3">
                            <Row>
                                <h1 className="display-5">{props.title}</h1>
                            </Row>
                            <Row>
                                <p className="display-6 my-2">{props.description}</p>
                            </Row>
                            <Row xs={1} md={2} lg={4} className="my-2">
                                <p className="my-2 text-success">Created by {props.authorName}</p>
                                <p className="my-2 text-info">Last updated {UpdatedDate}</p>
                                <span className="my-2"> {stars} {props.rating}.0 </span>
                            </Row>
                            <Row className="my-2">
                                <svg className="bi bi-chat-fill my-2" width="1.2em" height="1.2em" viewBox="0 0 16 16"
                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                     style={{marginRight: '0.3rem'}}>
                                    <path
                                        d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 008 15z"/>
                                </svg>
                                <p className="my-2">{props.languageName}</p>
                                <svg className="bi bi-camera-video-fill my-2" width="1.3em" height="1.3em"
                                     viewBox="0 0 16 16"
                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                     style={{marginLeft: '1rem', marginRight: '0.3rem'}}>
                                    <path
                                        d="M2.667 3h6.666C10.253 3 11 3.746 11 4.667v6.666c0 .92-.746 1.667-1.667 1.667H2.667C1.747 13 1 12.254 1 11.333V4.667C1 3.747 1.746 3 2.667 3z"/>
                                    <path
                                        d="M7.404 8.697l6.363 3.692c.54.313 1.233-.066 1.233-.697V4.308c0-.63-.693-1.01-1.233-.696L7.404 7.304a.802.802 0 000 1.393z"/>
                                </svg>
                                <p className="my-2">{duration} hours on-demand video</p>
                            </Row>
                        </div>

                        <div className="col-md-3 px-0">
                                <Card>
                                    <Card.Img style={{height: '180px'}} variant="top" src={props.image} alt=""/>
                                    <Card.Body className="btn">
                                        <button className="btn btn-secondary">Subscribe</button>
                                    </Card.Body>
                                </Card>
                        </div>

                    </div>

                </Container>
            </div>

            <Container>
                <Card className='noBorder'>
                    <Card.Body className='cardBodyPadding'>
                        <Row xs={2} md={2} lg={2}>
                            <h5 className="text-dark">Course content</h5>
                            <h5 className="text-dark text-right">{props.numLectures} Lectures</h5>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>

        </div>


    )
};
export default courseDetail;