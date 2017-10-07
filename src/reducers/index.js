import {combineReducers} from 'redux';
import projects from './projectsReducer';
import experience from './experienceReducer';
import feedbacks from './feedbackReducer';
import hobbies from './hobbiesReducer';

const rootReducer = combineReducers({projects, experience, feedbacks, hobbies});

export default rootReducer;