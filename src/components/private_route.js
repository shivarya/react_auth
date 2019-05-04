import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({isLogged, component: Comp,...rest}) => {
    console.log(isLogged);    
    return (
        <Route {...rest} render={(props) => (
            isLogged ?
                <Comp {...props} />
            :
                <Redirect to="/login" />

        )} />
    )
}

export default PrivateRoute;