import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import { Congratulation, CreateCase, Dashboard, Login, Registration } from './component';
import history from './History'

export class Main extends Component {
    render() {
        return (
            <Switch history={history}>
                <>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/registration" component={Registration} />
                    <Route exact path="/congratulation" component={Congratulation} />
                    <Route exact path="/create-case" component={CreateCase} />
                    <Route exact path="/dashboard" component={Dashboard} />
                </>
            </Switch>

        )
    }
}

export default Main
