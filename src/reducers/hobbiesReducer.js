import * as types from '../actions/actionTypes';

const initialState = {
    values: [],
    count: 0
}

export default function hobbiesReducers(state = initialState, action) {
    switch (action.type) {
        case types.SHOW_HOBBIES:
            return {
                ...state,
                values: [].concat(action.hobbies)
            }
        case types.CHECK_HOBBIES:
            return {
                ...state,
                count: action.countHobbies
            }
        default:
            return state;
    }
}