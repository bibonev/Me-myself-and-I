import {combineReducers} from 'redux';
import projects from './projectsReducer';
import experience from './experienceReducer';
import feedbacks from './feedbackReducers';

const rootReducer = combineReducers({projects, experience, feedbacks});

export default rootReducer;