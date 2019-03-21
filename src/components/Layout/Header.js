import React, { Component } from "react";
import {
  withStyles,
  IconButton,
  AppBar,
  Toolbar,
  Hidden,
  Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { UserDropdownMenu } from "./Sidebar";
import { routes } from "../../config";
import { layoutStyles } from "../../muiStyles";

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Hidden only={["xs"]}>
            <Typography
              type="title"
              variant="h6"
              color="inherit"
              style={{ flex: 1 }}
            >
              {routes[this.props.location.pathname]}
            </Typography>
          </Hidden>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={this.props.handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Hidden smUp implementation="css">
            <Typography
              type="title"
              variant="h6"
              color="inherit"
              style={{ flex: 1 }}
            >
              {routes[this.props.location.pathname]}
            </Typography>
          </Hidden>
          <div className="header">
            <UserDropdownMenu />
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(layoutStyles)(Header);
