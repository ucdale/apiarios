import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route
            exact
            component={() => (
                <Home />
            )}
            path="/"
            />
        </Routes>
    </BrowserRouter>
);

export default Router;