import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import DashboardPage from "./DashboardPage";
import LoginPage from "./LoginPage";
import SharePage from "./SharePage";
import ViewStoriesPage from "./ViewStoriesPage";

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/dashboard" component={DashboardPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/share" component={SharePage} />
            <Route exact path="/stories" component={ViewStoriesPage} />
        </Switch>
    </BrowserRouter>
);