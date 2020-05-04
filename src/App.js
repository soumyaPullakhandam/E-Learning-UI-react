import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';

import Layout from "./hoc/Layout/Layout";
import Courses from "./containers/Courses/Courses";
import CourseItems from "./containers/Courses/CourseItems/CourseItems";
import Register from "./containers/Authentication/Register/Register";
import MyEnrolments from "./containers/Courses/Student/MyEnrolments";
import MyCourses from "./containers/Courses/Tutor/MyCourses/MyCourses";

class App extends Component {

    render() {
        let routes = (
            <Switch>
                <Route path="/" exact={true} component={Courses}/>
                <Route path="/course/:id" component={CourseItems}/>
                <Route path="/signUp" exact={true} component={Register}/>
                <Route path="/myenrolments" component={MyEnrolments}/>
                <Route path="/mycourses" component={MyCourses}/>
                <Route path="/"/>
            </Switch>
        );

        return (
            <div>
                <Layout>
                    {routes}
                </Layout>
            </div>
        );
    }
}

export default withRouter(App);


// import React, {Component} from 'react';
// import {BrowserRouter} from 'react-router-dom'
//
// import Courses from './containers/Courses/Courses';
//
// class App extends Component {
//     render() {
//         return (
//             <BrowserRouter>
//                 <div className="App">
//                     <Courses/>
//                 </div>
//             </BrowserRouter>
//
//         );
//     }
// }
//
// export default App;
