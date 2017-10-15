import * as types from '../actions/actionTypes';

const initialState = {
    values: [],
    count: 0
}

export default function feedbackReducer(state = initialState, action) {
    switch (action.type) {
        case types.SHOW_FEEDBACK:
            return {
                ...state,
                values: [].concat(action.feedbacks)
            };
        case types.CHECK_FEEDBACK:
            return {
                ...state,
                count: action.countFeedback
            };
        default:
            return state;
    }
}