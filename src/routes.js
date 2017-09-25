import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App.js';
import HomePage from './components/home/HomePage.js';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="projects" component={HomePage}/>
        <Route path="experience" component={HomePage}/>
        <Route path="feedback" component={HomePage}/>
        <Route path="hobbies" component={HomePage}/>
        <Route path="languages" component={HomePage}/>
        <Route path="contact" component={HomePage}/>
    </Route>
);