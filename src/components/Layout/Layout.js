import React, { Component } from "react";
import { withStyles, Drawer, Hidden, CssBaseline } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import { Header, Footer, Sidebar } from "./";
import { layoutStyles } from "../../muiStyles";

class Layout extends Component {
  state = {
    mobileOpen: false
  };

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  getScrollBarStyle() {
    return {
      height: "calc(100vh - 10px)"
    };
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Header
          handleDrawerToggle={this.handleDrawerToggle}
          location={this.props.location}
        />
        <nav className={classes.drawer}>
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
            >
              <div tabIndex={0} role="button" onClick={this.handleDrawerToggle}>
                <Sidebar />
              </div>
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper
              }}
              variant="permanent"
              open
            >
              <Sidebar />
            </Drawer>
          </Hidden>
        </nav>
        <Scrollbars
          className="rct-scroll"
          autoHide
          autoHideDuration={100}
          style={this.getScrollBarStyle()}
        >
          <main className={classes.content}>
            <div className={classes.wrapper}>{this.props.children}</div>
            <Footer />
          </main>
        </Scrollbars>
      </div>
    );
  }
}

export default withRouter(withStyles(layoutStyles)(Layout));
