import React, {Component} from 'react';
import Course from "../../components/Course/Course";
import axios from "../../axios";
import Aux from "../../hoc/Aux/Aux"

import './Courses.css'

class Courses extends Component {
    state = {
        courses: [],
        catsFilter: ''
    }


    componentDidMount() {
        console.log(this.props);
        let hash = this.props.location.hash;
        if (hash.length === 0)
            this.CourseList()
        else {
            const Cats = hash.split('/')[0].search('#categories')
            if (Cats === 0) {
                const Cats_hash = hash.split('/')[1];
                this.CourseCategories(Cats_hash);
            }
        }
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        const hash = this.props.location.hash;
        if (prevProps.location.hash !== hash) {
            if (hash) {
                const Cats = hash.split('/')[0].search('#categories')
                if (Cats === 0) {
                    const Cats_hash = hash.split('/')[1];
                    this.CourseCategories(Cats_hash);
                }
            } else if (hash.length === 0)
                this.CourseList()
        }
    };

    CourseList = () => {
        axios.get('/learn/course')
            .then(response => {
                this.setState({courses: response.data})
            }).catch(error => {
            this.setState({error: error})
        });
    }

    CourseCategories = (Cats_hash) => {
        axios.get('/learn/course/?category=' + Cats_hash)
            .then(response => {
                this.setState({courses: response.data})
            }).catch(error => {
            this.setState({error: error})
        });
    };

    courseSelectedHandler = (id) => {
        this.props.history.push('/course/' + id);
    };

    render() {
        let courses = <p style={{textAlign: 'center'}}> Something went wrong!!</p>
        if (!this.state.error) {
            courses = this.state.courses.map(
                course => {
                    return <Course title={course.title}
                                   description={course.description}
                                   key={course.id}
                                   author_name={course.author_name}
                                   price={course.price}
                                   rating={course.rating}
                                   image={course.image}
                                   id={course.id}
                                   clicked={() => this.courseSelectedHandler(course.id)}/>

                });
        }
        return (
            <Aux>
                <section className='Courses'>
                    <div className="card-deck row row-cols-1 row-cols-md-5">
                        {courses}
                    </div>
                </section>
            </Aux>
        )

    }
}

export default Courses