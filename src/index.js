import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from "react-router";
import { HashRouter } from "react-router-dom";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import Layout from './components/Layout';

ReactDOM.render(
    <HashRouter>
        <Route path="/" component={App}>
        </Route>
    </HashRouter>, 
    document.getElementById('root'));

serviceWorker.unregister();
