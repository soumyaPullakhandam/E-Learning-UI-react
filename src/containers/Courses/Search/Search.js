import React, {Component} from 'react';

class Search extends Component {
    state = {
        coursesFilter: ''
    }

    render() {
        return (

            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <form className="form-inline">
                    <div className="input-group">
                        <input type="text" className="searchInput form-control-dark w-100"
                               placeholder="Search by Course"
                               aria-label="Search by Course" aria-describedby="button-addon2"/>
                        <div className="input-group-append">
                            <button className="btn btn-sm btn-outline-secondary"
                                    type="button">
                                <svg className="bi bi-search" width="1em" height="1em"
                                     viewBox="0 0 16 16"
                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z"
                                          clipRule="evenodd"/>
                                    <path fillRule="evenodd"
                                          d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
                                          clipRule="evenodd"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </form>
            </ul>

        )

    }
}

export default Search;