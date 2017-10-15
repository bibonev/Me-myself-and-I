import * as types from '../actions/actionTypes';

export default function searchReducer(state = [], action) {
    switch (action.type) {
        case types.SHOW_TECHNOLOGIES:
            return [].concat(action.technologies)
        default:
            return state;
    }
}