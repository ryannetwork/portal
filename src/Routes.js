import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { connect } from "react-redux";
import { Layout } from "./components/Layout";
import {
  Login,
  ErrorPage,
  LogoutPage,
  Dashboard,
  Openings
} from "./containers";

import {
  loginUser,
  setCurrentUser
} from "./actions/authActions";

import store from "./store";
import { setAuthToken } from "./actions";

class Routes extends Component {
  componentWillMount() {
    if (localStorage && localStorage.jwtToken) {
      setAuthToken(localStorage.jwtToken);
      const decoded = jwt_decode(localStorage.jwtToken);
      store.dispatch(setCurrentUser(decoded));
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        // store.dispatch(logoutUser());
        // store.dispatch(clearCurrentProfile());
        // window.location.href = "/login";
      }
    }
  }

  render() {
    const { location, auth } = this.props;

    if (auth.isAuthenticated) {
      return (
        <Layout>
          {location.pathname === "/register" ||
          location.pathname === "/" ||
          location.pathname === "/login" ? (
            <Redirect to={{ pathname: "/dashboard" }} />
          ) : null}
           <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/openings" component={Openings} />
          <Route exact={true} path="*" component={ErrorPage} />
          <Route exact path="/logout" component={LogoutPage} />
          </Switch>
        </Layout>
      );
    } else {
      return (
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={LogoutPage} />
        </Switch>
      );
    }
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(Routes));
