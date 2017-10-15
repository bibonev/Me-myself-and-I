import {combineReducers} from 'redux';
import projects from './projectsReducer';
import experience from './experienceReducer';
import feedbacks from './feedbackReducer';
import hobbies from './hobbiesReducer';
import search from './searchReducer';

const rootReducer = combineReducers({projects, experience, feedbacks, hobbies, search});

export default rootReducer;