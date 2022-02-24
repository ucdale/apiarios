import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Home';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route
            exact
            component={() => (
                <Home />
            )}
            path="/"
            />
        </Switch>
    </BrowserRouter>
);

export default Router;