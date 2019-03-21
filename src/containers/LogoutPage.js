import React, { Component } from "react";
import { connect } from "react-redux";
import { Typography, Grid, CircularProgress } from "@material-ui/core";

import { logoutUser } from "../actions/authActions";

class LogoutPage extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.logoutUser();
    }, 700);
  }

  render() {
    return (
      <Grid
        container
        alignContent={"center"}
        justifyContent={"center"}
        className="LogoutPage"
      >
        <Grid item>
          <Typography align="center" variant={"display1"}>
            Logging Out...
          </Typography>
          <CircularProgress />
        </Grid>
      </Grid>
    );
  }
}

export default connect(
  null,
  {
    logoutUser
  }
)(LogoutPage);
