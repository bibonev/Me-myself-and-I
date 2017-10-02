import {combineReducers} from 'redux';
import projects from './projectsReducer';
import experience from './experienceReducer';

const rootReducer = combineReducers({projects, experience});

export default rootReducer;