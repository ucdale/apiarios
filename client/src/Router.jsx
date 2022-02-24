import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from './Home';

const Router = () => (
    <Switch>
        <Route
        exact
        component={() => (
            <Home />
        )}
        path="/"
        />
    </Switch>
);

export default Router;