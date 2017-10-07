import * as types from '../actions/actionTypes';

export default function hobbiesReducers(state = [], action) {
    switch (action.type) {
        case types.SHOW_HOBBIES:
            return [].concat(action.hobbies)
        default:
            return state;
    }
}