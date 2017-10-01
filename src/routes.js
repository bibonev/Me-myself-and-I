import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App.js';
import HomePage from './components/home/HomePage.js';
import ProjectsPage from './components/projects/ProjectsPage.js';
import ExperiencePage from './components/experience/ExperiencePage.js';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="projects" component={ProjectsPage}/>
        <Route path="experience" component={ExperiencePage}/>
        <Route path="feedback" component={HomePage}/>
        <Route path="hobbies" component={HomePage}/>
        <Route path="languages" component={HomePage}/>
        <Route path="contact" component={HomePage}/>
    </Route>
);