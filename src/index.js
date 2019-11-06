import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { GlobalStyle, FontFamilies } from "./theme";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./router";

ReactDOM.render(
    <BrowserRouter>
        <Fragment>
            <Routes />
            <GlobalStyle />
            <FontFamilies />
        </Fragment>
    </BrowserRouter>
    ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
