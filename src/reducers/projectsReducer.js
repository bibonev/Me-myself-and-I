import * as types from '../actions/actionTypes';

const initialState = {
    values: [],
    count: 0
}

export default function projectsReducers(state = initialState, action) {
    switch (action.type) {
        case types.SHOW_PROJECTS:
            return {
                ...state,
                values: [].concat(action.projects)
            }
        case types.CHECK_PROJECTS:
            return {
                ...state,
                count: action.countProjects
            }
        default:
            return state;
    }
}