import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import facebook from './facebook.png'
import config from '../config';
import { loginUser } from "../../../actions/authActions";
import { connect } from "react-redux";

class FacebookLogin extends Component{
    
    componentDidMount(){
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        
        window.fbAsyncInit = function() {
            window.FB.init({
              appId      : config.facebook,
              cookie     : true,  
              xfbml      : true,  
              version    : 'v2.8' 
            });
        };
    }
    
    facebookLogin = () => {
        window.FB.login(
            function(resp){
                this.statusChangeCallback(resp);
            }.bind(this),{ scope : 'email,user_location,public_profile' });
    }
    
    checkLoginState() {
        alert("Checking Login Status")
        console.log( "Checking login status..........." );
        
        window.FB.getLoginStatus(function(response) {
            alert("FB Callback")
            console.log("----------->")
            console.log(response)
            this.statusChangeCallback(response);
        }.bind(this));
    }
    
    statusChangeCallback(response) {
        console.log('statusChangeCallback');
        console.log(response);
        if (response.status === 'connected') {
            this.props.loginUser();
            this.fetchDataFacebook();
        } else if (response.status === 'not_authorized') {
            console.log('Import error', 'Authorize app to import data', 'error')
        } else {
            console.log('Import error', 'Error occured while importing data', 'error')
        }
    }
    
    fetchDataFacebook = () => {
        console.log('Welcome!  Fetching your information.... ');

        window.FB.api('/me', function(user) {
            console.log( user );
            console.log('Successful login from facebook : ' + user.name);
            // alert( 'Successful login for: ' + user.name );
        });
    }

    render(){
        return(
            <img src={facebook} className="social" title="facebook login" alt="facebook" onClick={ () => this.facebookLogin() } />
        )
    }
}

export default connect(
    null,
    {
      loginUser
    }
  )(withRouter(FacebookLogin));
