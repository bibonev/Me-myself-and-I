import * as types from '../actions/actionTypes';

export default function homeReducers(state = [], action) {
    switch (action.type) {
        case types.SHOW_PROJECTS:
            return [].concat(action.projects)
        default:
            return state;
    }
}