import React, {Component} from 'react';
import Course from "../../../components/Course/Course";
import axios from "../../../axios";
import Aux from "../../../hoc/Aux/Aux";

class MyEnrolments extends Component {
    state = {
        myenrolments: [],
        catsFilter: ''
    }


    componentDidMount() {
        console.log(this.props);
        axios.get('/enrol/')
            .then(response => {
                this.setState({myenrolments: response.data})
            }).catch(error => {
            this.setState({error: error})
        });
    };


    courseSelectedHandler = (id) => {
        this.props.history.push('/course/' + id);
    };

    render() {
        let myenrol = <p style={{textAlign: 'center'}}> Something went wrong!!</p>
        if (!this.state.error) {
            myenrol = this.state.myenrolments.map(
                enrol => {
                    return <Course title={enrol.course_list.title}
                                   description={enrol.course_list.description}
                                   key={enrol.course_list.id}
                                   author_name={enrol.course_list.author_name}
                                   price={enrol.course_list.price}
                                   rating={enrol.course_list.rating}
                                   image={enrol.course_list.image}
                                   id={enrol.course_list.id}
                                   clicked={() => this.courseSelectedHandler(enrol.course_list.id)}/>

                });
        }
        return (
            <Aux>
                <section className='Courses'>
                    <div className="card-deck">
                        {myenrol}
                    </div>
                </section>
            </Aux>
        )

    }
}

export default MyEnrolments