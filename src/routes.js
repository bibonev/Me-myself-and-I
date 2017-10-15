import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App.js';
import HomePage from './components/home/HomePage.js';
import ProjectsPage from './components/projects/ProjectsPage.js';
import ExperiencePage from './components/experience/ExperiencePage.js';
import FeedbackPage from './components/feedback/FeedbackPage.js';
import HobbiesPage from './components/hobbies/HobbiesPage.js';
import SearchResultsPage from './components/search-results/SearchResultsPage';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="about" component={HomePage}/>
        <Route path="projects" component={ProjectsPage}/>
        <Route path="experience" component={ExperiencePage}/>
        <Route path="feedback" component={FeedbackPage}/>
        <Route path="hobbies" component={HobbiesPage}/>
    </Route>
);