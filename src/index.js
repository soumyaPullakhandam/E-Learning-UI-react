import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from "react-router-dom";
import {createStore, compose, applyMiddleware, combineReducers} from "redux";
import {Provider} from "react-redux";

import thunk from "redux-thunk";
import AuthReducer from "./store/reducers/AuthReducer";



import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const rootReducer = combineReducers({
    auth : AuthReducer,
})


// To achive redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));


const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.register();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
