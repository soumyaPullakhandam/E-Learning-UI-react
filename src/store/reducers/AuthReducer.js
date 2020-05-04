import * as actionTypes from "../actions/actionTypes";
import {updateObject} from '../../shared/utility';


const initialState = {
    email: '',
    fullname: '',
    username: '',
    group: '',
    authen: false

};

const authSuccess = (state, action) => {
    return updateObject(state, {
        email: action.email,
        fullname: action.fullname,
        username: action.username,
        group: action.group,
        authen: action.authen
    });
};

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        authen: action.authen
    });
}


const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        default: return state;
    }

};
export default authReducer;