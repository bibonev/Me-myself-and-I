import * as types from '../actions/actionTypes';

const initialState = {
    education: [],
    comercial: [],
    volunteering: []
}

export default function experienceReducers(state = initialState, action) {
    switch (action.type) {
        case types.SHOW_EDUCATION:
            return {
                ...state,
                education: [].concat(action.education)
            };
        case types.SHOW_COMERCIAL:
            return {
                ...state,
                comercial: [].concat(action.comercial)
            };
        case types.SHOW_VOLUNTEERING:
            return {
                ...state,
                volunteering: [].concat(action.volunteering)
            };
        case types.CHECK_EXPERIENCE:
            return {
                ...state,
                count: action.countExperience
            }
        default:
            return state;
    }
}