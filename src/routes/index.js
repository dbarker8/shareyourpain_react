import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import DashboardPage from "./DashboardPage";
import LoginPage from "./LoginPage";
import SharePage from "./SharePage";
import ViewStoriesPage from "./ViewStoriesPage";
import HelpPage from "./HelpPage";
import PrivacyPolicy from "./PrivacyPolicy";

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/dashboard" component={DashboardPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/share" component={SharePage} />
            <Route exact path="/stories" component={ViewStoriesPage} />
            <Route exact path="/gethelp" component={HelpPage} />
            <Route exact path="/privacypolicy" component={PrivacyPolicy} />
        </Switch>
    </BrowserRouter>
);