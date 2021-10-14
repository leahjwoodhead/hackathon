import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom"
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import LandingPage from "./components/LandingPage"
// import history from "./history";

export default class Routes extends Component {
    render() {
        return (
                <Switch>
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/About" component={About} />
                    <Route path="/Dashboard/:topic" component={Dashboard} />
                </Switch>
    
        )
    }
}