import React, { Component } from 'react';

import { firebase, googleAuth } from "../firebase_main";

class Login extends Component {

    state = {
        status: false
    }

    signIn = () => {
        firebase.auth().signInWithPopup(googleAuth)
        .then(function(authData) {
            console.log(authData);
        }).catch(function(error) {
            console.log(error);
        });
    }

    signOut = () => {
        firebase.auth().signOut()
        .then(function(authData) {
            console.log(authData);
        }).catch(function(error) {
            console.log(error);
        });
    }

    //check if user logged in inside component
    componentDidMount(){
        let status = false;        
        if(this.props.isLogged){
            status = true;
        }
        this.setState({status});
        
    }

    render(){
        return (
            <div>
                {
                    !this.state.status ?
                        <button  onClick={this.signIn}>Login with Google</button>
                        :
                        <button onClick={this.signOut}>Login out</button>
                }
                
                
            </div>
        )
    }
}

export default Login;