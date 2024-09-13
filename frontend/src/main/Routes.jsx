import React from 'react';
import {Route, Redirect, Switch} from 'react-router';
import Home from '../components/home/Home';
import UserCrud from '../components/user/UserCrud';

export default props => 
    <Switch>
        <Route exact path="/" component={Home}>
        </Route>
        <Route path="/users" component={UserCrud}>
        </Route>
        <Redirect from="*" to="/"></Redirect>
    </Switch>
