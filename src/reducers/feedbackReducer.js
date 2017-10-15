import * as types from '../actions/actionTypes';

export default function feedbackReducer(state = [], action) {
    switch (action.type) {
        case types.SHOW_FEEDBACK:
            return [].concat(action.feedbacks)
        case types.CHECK_FEEDBACK:
            return {
                ...state,
                count: action.countFeedback
            }
        default:
            return state;
    }
}