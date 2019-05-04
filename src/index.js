import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { firebase } from "./firebase_main";

const App = props => {
    return(
        <BrowserRouter>
            <Routes {...props} />
        </BrowserRouter>
    )
}

//firebase to check if user is logged in
firebase.auth().onAuthStateChanged((user) => {
    ReactDOM.render(<App user={user} />, document.getElementById('root'));
})
