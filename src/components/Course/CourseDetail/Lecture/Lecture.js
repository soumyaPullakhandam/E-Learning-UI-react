import React from 'react';
import './Lecture.css'


const lecture = (props) => {
    return (
        <tr key={props.id} id={props.header} data-toggle="collapse" data-target={props.hashCollapse}>
            <td className="border-0 text-black-50">
                <svg style={{marginRight: '0.5rem'}} className="bi bi-camera-video-fill" width="1.3em" height="1.5em" viewBox="0 0 16 16"
                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M2.667 3h6.666C10.253 3 11 3.746 11 4.667v6.666c0 .92-.746 1.667-1.667 1.667H2.667C1.747 13 1 12.254 1 11.333V4.667C1 3.747 1.746 3 2.667 3z"/>
                    <path
                        d="M7.404 8.697l6.363 3.692c.54.313 1.233-.066 1.233-.697V4.308c0-.63-.693-1.01-1.233-.696L7.404 7.304a.802.802 0 000 1.393z"/>
                </svg>
                {props.title}
            </td>
            <td className="border-0 text-black-50 text-right">
                <svg style={{marginRight: '0.5rem'}} className="bi bi-clock-fill" width="1.1em" height="1.3em" viewBox="0 0 16 16" fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                          d="M16 8A8 8 0 110 8a8 8 0 0116 0zM8 3.5a.5.5 0 00-1 0V9a.5.5 0 00.252.434l3.5 2a.5.5 0 00.496-.868L8 8.71V3.5z"
                          clipRule="evenodd"/>
                </svg>{props.duration} min
            </td>
        </tr>

    )
};
export default lecture;