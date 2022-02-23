import React from 'react';
import { Router, Switch} from 'react-router-dom';

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