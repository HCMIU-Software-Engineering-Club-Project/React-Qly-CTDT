import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Program from "./pages/program";

export default class AppRouter extends React.Component {
    render() {
        return(
                <div>
                        <Switch>
                            <Route path="/program">
                                <Program />
                            </Route>
                            {/* path="/" must stay beneath */}
                            <Route exact path="/">
                                <Home />
                            </Route>
                        </Switch>
                </div>
        );
    }
}