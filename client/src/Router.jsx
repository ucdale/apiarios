import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListaApiari from './apiario/ListaApiari';
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
        <Routes>
            <Route
            exact
            component={() => (
                <ListaApiari />
            )}
            path="/lista"
            />
        </Routes>
    </BrowserRouter>
);

export default Router;