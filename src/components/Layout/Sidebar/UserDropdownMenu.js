import React, { Component } from "react";
import {
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import {
  AccountCircle,
  ExpandMore,
  Close
} from "@material-ui/icons";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";

const userDropDownLinks = [
  {
    path: "/logout",
    title: "Logout",
    icon: <Close fontSize={"small"} />
  }
];

class UserDropdownMenu extends Component {
  state = {
    anchorEl: null,
    open: false
  };

  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  handleClickMenuItem = route => {
    this.props.history.push(route);
    this.setState({ open: false });
  };

  renderMenuItem = menuItem => {
    return (
      <MenuItem
        key={menuItem.path}
        onClick={() => {
          this.handleClickMenuItem(menuItem.path);
          this.props.history.push("/logout");
          window.location.reload();
        }}
      >
        {menuItem.icon && (
          <ListItemIcon
            style={{ color: "#222222", fontSize: ".8rem", marginRight: 8 }}
          >
            {menuItem.icon}
          </ListItemIcon>
        )}
        <ListItemText>
          <span style={{ color: "#222222", fontSize: ".8rem" }}>
            {menuItem.title}
          </span>
        </ListItemText>
      </MenuItem>
    );
  };

  render() {
    return (
      <div className="UserDropdownMenu">
        <Button
          aria-owns={this.state.open ? "menu-appbar" : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
          color="inherit"
        >
          <AccountCircle style={{ marginRight: 10 }} />
          <ExpandMore />
        </Button>
        <Menu
          className="user-info"
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onClose={this.handleRequestClose}
          PaperProps={{
            style: {
              width: 160,
              paddingTop: 0,
              paddingBottom: 0,
              marginTop: 40
            }
          }}
        >
          {userDropDownLinks.map(this.renderMenuItem)}
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UserDropdownMenu));
