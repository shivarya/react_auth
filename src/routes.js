import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/header';
import Uncontrolled from './components/uncontrolled';
import Controlled from './components/controlled';
import User from './components/user';
import Login from './components/login';
import Dashboard from './components/dashboard';
import PrivateRoute from './components/private_route';

const Routes = props => {
    return (
        <div>
            <Header/>
            <Switch>
                <Route path="/uncontrolled" exact component={Uncontrolled} />
                <Route path="/controlled" exact component={Controlled} />
                <Route path="/user" exact component={User} />
                <Route path="/login" exact render={() => <Login isLogged={props.user}/>} />
                <PrivateRoute isLogged={props.user} path="/dashboard" exact component={Dashboard} />
            </Switch>
        </div>
    )
};

export default Routes;