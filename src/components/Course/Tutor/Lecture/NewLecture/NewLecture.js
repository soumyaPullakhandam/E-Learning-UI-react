import React from "react";

const newLecture = (props) => {


    return (
        <div className="container">
            <div className="col-md-12">
                <form className="needs-validation" onSubmit={props.onSubmit}>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="title"
                               placeholder="Provide title of the lecture"
                               required={true}
                               name="title"
                               value={props.title || ""}
                               onChange={props.change}/>
                    </div>

                    <div className="mb-3">
                        <textarea className="form-control" id="description"
                                  placeholder="Tell us more about the lecture"
                                  required={true}
                                  name="description"
                                  value={props.description || ""}
                                  onChange={props.change}/>
                    </div>

                    <hr className="mb-4"/>
                    <button className="btn btn-outline-secondary btn-light btn-lg btn-block"
                            type="submit"> Create
                    </button>
                </form>
            </div>

        </div>

    )
};
export default newLecture;

