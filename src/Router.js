import React from 'react';

import {Route, BrowserRouter as Router, Redirect, Switch} from 'react-router-dom'

import Contact from './Contact/Contact'
import Todolist from './ToDo/todolist'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Todolist}/>
                <Route path="/Contact" component={Contact}/>
                <Redirect to="/"></Redirect>
            </Switch>
        </Router>
    )
}

export default Routes;