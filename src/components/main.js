import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Resume from './resume';
import Project from './project';
import Contact from './contact';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/resume" component={Resume} />
        <Route path="/project" component={Project} />
        <Route path="/contact " component={Contact} />
    </Switch>
)

export default Main;