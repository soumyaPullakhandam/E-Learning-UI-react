import React from "react";
import icon from "../../../assets/images/E-Learning.png";

const register = (props) => {
    return (
        <div className="container">
            <div className="py-6 text-center">
                <img className="d-block mx-auto mb-4"
                     src={icon}
                     alt=""
                     width="72"
                     height="72"/>
                <h2 className="text-success"> Registration
                    form </h2>
            </div>

            <div className="col-md-12">
                <h4 className="mb-3 text-warning">Personal Details</h4>
                {/*was-validated*/}
                <form className="needs-validation" onSubmit={props.onSubmit}>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="first_name">First name</label>
                            <input type="text" className="form-control" id="first_name"
                                   placeholder="First name"
                                   required={true}
                                   name="first_name"
                                   value={props.first_name || ""}
                                   onChange={props.change}/>
                            <div className="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="last_name">Last name</label>
                            <input type="text" className="form-control" id="last_name"
                                   placeholder="Last name"
                                   required={true}
                                   name="last_name"
                                   value={props.last_name || ""}
                                   onChange={props.change}/>
                            <div className="invalid-feedback">
                                Valid last name is required.
                            </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">@</span>
                            </div>
                            <input type="text" className="form-control" id="email"
                                   placeholder="E-mail"
                                   required={true}
                                   name="email"
                                   value={props.email || ""}
                                   onChange={props.change}/>
                            <div className="invalid-feedback">
                                Please enter a valid email address for sign-in.
                            </div>
                        </div>
                        <small id="passwordHelpInline" className="text-muted">
                            Please enter a valid email address for sign-in.
                        </small>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password"
                               placeholder="******"
                               required aria-describedby="passwordHelpInline"
                               name="password"
                               value={props.password || ""}
                               onChange={props.change}/>
                        <small id="passwordHelpInline" className="text-muted">
                            Must be 8-20 characters long.
                        </small>
                        <div className="invalid-feedback">
                            Please enter password
                        </div>
                    </div>

                    {/*<div className="mb-3">*/}
                    {/*    <label htmlFor="address2">Address <span*/}
                    {/*        className="text-muted">(Optional)</span></label>*/}
                    {/*    <input type="text" className="form-control" id="address"*/}
                    {/*           placeholder="1234 Main St"*/}
                    {/*           name="address"*/}
                    {/*           value={props.address || ""}*/}
                    {/*           onChange={props.change}/>*/}
                    {/*</div>*/}

                    {/*<div className="row">*/}
                    {/*    <div className="col-md-5 mb-3">*/}
                    {/*        <label htmlFor="country">Country</label>*/}
                    {/*        <input type="text" className="form-control" id="country"*/}
                    {/*               placeholder=""*/}
                    {/*               required={true}*/}
                    {/*               name="country"*/}
                    {/*               value={props.country || ""}*/}
                    {/*               onChange={props.change}/>*/}
                    {/*        <div className="invalid-feedback">*/}
                    {/*            Please provide a valid country.*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-md-4 mb-3">*/}
                    {/*        <label htmlFor="state">State</label>*/}
                    {/*        <input type="text" className="form-control" id="state"*/}
                    {/*               placeholder=""*/}
                    {/*               required={true}*/}
                    {/*               name="state"*/}
                    {/*               value={props.state || ""}*/}
                    {/*               onChange={props.change}/>*/}
                    {/*        <div className="invalid-feedback">*/}
                    {/*            Please provide a valid state.*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-md-3 mb-3">*/}
                    {/*        <label htmlFor="zip">Zip</label>*/}
                    {/*        <input type="text" className="form-control" id="zip"*/}
                    {/*               placeholder=""*/}
                    {/*               required={true}*/}
                    {/*               name="zip"*/}
                    {/*               value={props.zip || ""}*/}
                    {/*               onChange={props.change}/>*/}
                    {/*        <div className="invalid-feedback">*/}
                    {/*            Zip code required.*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <hr className="mb-4"/>

                    <h4 className="mb-3 text-info">User Type</h4>

                    <div className="d-block my-3">
                        <div className="custom-control custom-radio">
                            <input id="tutor" name="group" type="radio" data-groups="1"
                                   className="custom-control-input" required={true}
                                   value={props.group || ""}
                                   onChange={props.groupsChange}/>
                            <label className="custom-control-label" htmlFor="tutor">Tutor</label>
                        </div>
                        <div className="custom-control custom-radio">
                            <input id="student" name="group" type="radio" data-groups="2"
                                   className="custom-control-input" required={true}
                                   value={props.group || ""}
                                   onChange={props.groupsChange}/>
                            <label className="custom-control-label" htmlFor="student">Student</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="phone">Phone
                                <span className="text-muted"> (Optional)</span>
                            </label>
                            <input type="text" className="form-control" id="phone"
                                   placeholder="+01 23456789"
                                   name="phone"
                                   value={props.phone || ""}
                                   onChange={props.change}/>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="website">Website <span
                                className="text-muted"> (Optional)</span></label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon3">http://</span>
                                </div>
                                <input type="text" className="form-control" id="website"
                                       aria-describedby="basic-addon3"
                                       placeholder="www.website.com"
                                       name="website"
                                       value={props.website || ""}
                                       onChange={props.change}/>
                            </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="qualification">Qualification
                            <span className="text-muted"> (Optional)</span>
                        </label>
                        <input type="text" className="form-control"
                               id="qualification"
                               placeholder="Bachelor of technology in computer science"
                               name="qualification"
                               value={props.qualification || ""}
                               onChange={props.change}/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="biography">Biography
                            <span className="text-muted"> (Optional)</span>
                        </label>
                        <textarea className="form-control" id="biography"
                                  placeholder="Biography"
                                  name="biography"
                                  value={props.biography || ""}
                                  onChange={props.change}/>
                    </div>

                    <hr className="mb-4"/>
                    <button className="btn btn-outline-secondary btn-light btn-lg btn-block"
                            type="submit"> Register
                    </button>
                </form>
            </div>

        </div>

    )
};
export default register;

