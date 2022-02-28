import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListaApiari from './apiario/ListaApiari';
import Home from './Home';
import { Link } from "react-router-dom";

const Router = () => (
        <Routes>
            <Route
            exact
            path="/"
            element={ <Home/> }
            />
            <Route
            path="/lista"
            element={<ListaApiari />}
            />
        </Routes>
);

export default Router;