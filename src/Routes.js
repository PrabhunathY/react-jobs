import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import JobMatches from './container/JobMatches';

function Routes() {
    return (
        <Router>

            <Switch>
                <Route path="/" component={JobMatches} exact />
                <Redirect to="/" />
            </Switch>
            <ToastContainer />
        </Router>
    );
}

export default Routes;
