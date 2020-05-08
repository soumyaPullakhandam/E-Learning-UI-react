import React from "react";
import './NewTopic.css';

const newTopic = (props) => {
    const lectures = props.lectures.map(
        (lec, index) => {
            return (
                <li key={index}
                    className="nav-link align-items-center d-flex list-group-item-light justify-content-between list-group-item list-group-item-action">
                    {lec.title}
                    <div className="btn-group btn-group-sm">
                        <button className="btn btn-outline-secondary" data-index={index}
                                onClick={(evt) => props.topicLecUpdate(evt)}>
                            <svg className="bi bi-brush not-active text-secondary" width="15" height="15" viewBox="0 0 16 16"
                                 fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.213 1.018a.572.572 0 01.756.05.57.57 0 01.057.746C15.085 3.082 12.044 7.107 9.6 9.55c-.71.71-1.42 1.243-1.952 1.596-.508.339-1.167.234-1.599-.197-.416-.416-.53-1.047-.212-1.543.346-.542.887-1.273 1.642-1.977 2.521-2.35 6.476-5.44 7.734-6.411z"/>
                                <path
                                    d="M7 12a2 2 0 01-2 2c-1 0-2 0-3.5-.5s.5-1 1-1.5 1.395-2 2.5-2a2 2 0 012 2z"/>
                            </svg>
                        </button>
                        <button className="btn btn-outline-secondary" data-index={index}
                                onClick={(evt) => props.topicLecDelete(evt)}>
                            <svg className="bi bi-trash-fill  not-active text-secondary" width="18" height="18" viewBox="0 0 16 16"
                                 fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M2.5 1a1 1 0 00-1 1v1a1 1 0 001 1H3v9a2 2 0 002 2h6a2 2 0 002-2V4h.5a1 1 0 001-1V2a1 1 0 00-1-1H10a1 1 0 00-1-1H7a1 1 0 00-1 1H2.5zm3 4a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zM8 5a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7A.5.5 0 018 5zm3 .5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7z"
                                      clipRule="evenodd"/>
                            </svg>
                        </button>
                    </div>
                </li>)
        }
    )


    const uploadLec = (<form className="needs-validation" onSubmit={props.onUploadSubmit}>
        <div className="card text-center">
            <div className="card-body mb-3">
                <div className="custom-file">
                    <input type="file" multiple className="file"
                           placeholder="Upload Files" name="file" onChange={props.onchangelecUpload}/>

                </div>
                <small id="imageHelpInline" className="text-muted">
                    Please upload lectures
                </small>
            </div>
            <div className="card-footer text-muted ">
                <button className="btn btn-outline-secondary text-center btn-light btn-sm">
                    Upload Lectures
                </button>
            </div>
        </div>
    </form>)
    let filelist = null;
    if (props.filepaths) {
        filelist = props.filepaths.map(
            filepath => {
                return <option key={filepath.id} value={filepath.id}>{filepath.file}</option>
            });
    }


    let addlectures = null;
    let updateLecture = null;
    if (props.lecture && props.lecture.hasOwnProperty('title')) {

        if (props.lecture.hasOwnProperty('id')) {
            updateLecture = (
                <button className="btn btn-outline-secondary text-center btn-light btn-sm"
                        onClick={props.onLecUpdate}
                        type="submit"> Update Lecture
                </button>
            )
        }

        addlectures = (
            <form className="needs-validation" onSubmit={props.onLecSubmit}>
                <div className="mb-3">
                    <input type="text" className="form-control"
                           placeholder="Provide title of the lecture"
                           required={true}
                           id="title"
                           value={props.lecture.title || ''}
                           onChange={props.onchangelecture}
                           name="title"/>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control"
                           placeholder="Provide duration of the lecture"
                           required={true}
                           id="duration"
                           value={props.lecture.duration || ''}
                           onChange={props.onchangelecture}
                           name="duration"/>
                </div>
                <div className="mb-3">
                    <select className="custom-select"
                            id="lectureFile"
                            required={true}
                            name="lectureFile"
                            value={props.lecture.lectureFile || ""}
                            onChange={props.onchangelecture}>
                        <option value="">Select course lecture</option>
                        {filelist}
                    </select>
                    <small id="imageHelpInline" className="text-muted">
                        Please choose uploaded lecture
                    </small>
                </div>
                <button className="btn btn-outline-secondary text-center btn-light btn-sm" type="submit"> Add
                    Lecture
                </button>
                {''} {updateLecture}
            </form>
        );

    }


    return (

        <div className="container">

            <ul className="nav nav-tabs nav-fill" id="myTab" role="tablist">
                <li className="nav-item">
                    <a className={props.classes.topic} id="topic-tab" data-toggle="tab" href="#topic" role="tab"
                       aria-controls="topic" aria-selected="true">Topic</a>
                </li>
                <li className="nav-item">
                    <a className={props.classes.upload} id="upload-tab" data-toggle="tab" href="#upload" role="tab"
                       aria-controls="upload" aria-selected="false">Upload</a>
                </li>
                <li className="nav-item">
                    <a className={props.classes.lecture} id="lecture-tab" data-toggle="tab" href="#lecture" role="tab"
                       aria-controls="lecture" aria-selected="false">Lecture</a>
                </li>
            </ul>

            <div className="tab-content py-3 px-3 px-sm-0" id="myTabContent">
                <div className={props.classes.topicdiv} id="topic" role="tabpanel" aria-labelledby="topic-tab">

                    <div className="col-md-12">
                        <form className="needs-validation" onSubmit={props.handleNewTopicSubmit}>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="title"
                                       placeholder="Provide title of the topic"
                                       required={true}
                                       name="title"
                                       value={props.title || ""}
                                       onChange={props.onchangetopic}/>
                            </div>

                            <div className="mb-3">
                             <textarea className="form-control" id="description"
                                       placeholder="Tell us more about the topic"
                                       required={true}
                                       name="description"
                                       value={props.description || ""}
                                       onChange={props.onchangetopic}/>
                            </div>

                            <button className="btn btn-outline-secondary btn-light btn-sm btn-block"
                                    type="submit"> Next to upload lectures
                            </button>
                            <small id="submitbuttonInline" className="text-muted">
                                You can click next button and exit to add the lectures later
                            </small>
                        </form>
                    </div>


                </div>
                <div className={props.classes.uploaddiv} id="upload" role="tabpanel" aria-labelledby="upload-tab">
                    {uploadLec}
                </div>
                <div className={props.classes.lecturediv} id="lecture" role="tabpanel" aria-labelledby="lecture-tab">
                    <div className="col-md-12">
                        <div className="card bg-light mb-3">
                            <h6 className="text-info card-header">Create Lecture</h6>
                            <div className="card-body">
                                {addlectures}
                            </div>
                        </div>

                        <div className="list-group nav flex-column mb-2 ">
                            {lectures}
                            <button className="btn btn-outline-secondary btn-light btn-sm btn-block"
                                    onClick={props.onLecTopicSubmit}> Create Topic with lectures
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
};
export default newTopic;

