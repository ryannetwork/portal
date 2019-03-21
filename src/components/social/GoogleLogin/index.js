import React, { Component } from 'react';
import google from './google.png'
import config from '../config';
import { withRouter } from 'react-router-dom';
import { loginUser } from "../../../actions/authActions";
import { connect } from "react-redux";

class GoogleLogin extends Component{

        componentDidMount(){
        (function() {
            var e = document.createElement("script");
            e.type = "text/javascript";
            e.async = true;
            e.src = "https://apis.google.com/js/client:platform.js?onload=gPOnLoad";
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t)
        })();    
    }
    
    googleLogin = () => {
        window.gapi.auth.signIn({
            callback: function(authResponse) {
                this.googleSignInCallback( authResponse )
            }.bind( this ),
            clientid: config.google, 
            cookiepolicy: "single_host_origin",
            requestvisibleactions: "http://schema.org/AddAction",
            scope: "https://www.googleapis.com/auth/plus.login email"
        });
    }
    
    googleSignInCallback = (e) => {
        console.log( e )
        if (e["status"]["signed_in"]) {
            window.gapi.client.load("plus", "v1", function() {
                if (e["access_token"]) {
                    this.getUserGoogleProfile( e["access_token"] )
                } else if (e["error"]) {
                    console.log('Import error', 'Error occured while importing data')
                }
            }.bind(this));
        } else {
            console.log('Oops... Error occured while importing data')
        }
    }

    getUserGoogleProfile = accesstoken => {
        var e = window.gapi.client.plus.people.get({
            userId: "me"
        });
        e.execute(function(e) {
            if (e.error) {
                console.log(e.message);
                console.log('Import error - Error occured while importing data')
                return
            
            } else if (e.id) {
                // alert("Successfull login from google : "+ e.displayName )
                console.log( e );
                this.props.loginUser();
                // localStorage.setItem("jwtToken", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NTMxNzg4ODEsIm9yaWdfaWF0IjoxNTUzMTY0NDgxLCJ1c2VyX2lkIjo4OTksInVzZXJuYW1lIjoiYWNjb3VudEBhY2NvdW50LmNvbSIsImVtYWlsIjoiYWNjb3VudEBhY2NvdW50LmNvbSJ9.IbOw3_vB_7fzyqUEe5_szQKsTHXQlRPLTZb2kiSGhkE");
                // this.props.history.push('/dashboard');
                return;
            }
        }.bind(this));
    }
    
    render(){
        return(
            <img src={google} className="social" title="google login" alt="google" onClick={ () => this.googleLogin() }/>
        )
    }
}

export default connect(
    null,
    {
      loginUser
    }
  )(withRouter(GoogleLogin));
