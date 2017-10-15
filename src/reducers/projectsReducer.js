import * as types from '../actions/actionTypes';

export default function projectsReducers(state = [], action) {
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