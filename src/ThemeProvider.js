import React, { Component, Fragment } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import muiTheme from "./muiTheme";

class ThemeProvider extends Component {
  render() {
    const { children } = this.props;
    return (
      <MuiThemeProvider theme={muiTheme}>
      <Fragment>{children}</Fragment>
      </MuiThemeProvider>
    );
  }
}

export default ThemeProvider;
