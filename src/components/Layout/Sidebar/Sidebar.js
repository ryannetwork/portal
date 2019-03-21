import React, { Component } from "react";
import { withStyles, List, Divider } from "@material-ui/core";
import {
  Dashboard,
  Note
} from "@material-ui/icons";

import { ListItemLink } from "./";
import { content } from "../../../config";
import { layoutStyles } from "../../../muiStyles";

const SideBarLinks = [
  {
    path: "/dashboard",
    title:"Dashboard",
    icon: <Dashboard />
  },
  {
    path: "/openings",
    title:"Openings",
    icon: <Note />
  },
];

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  renderLinks = () => {
    return SideBarLinks.map(link => {
      return (
        <ListItemLink
          key={link.path}
          to={link.path}
          primary={link.title}
          icon={link.icon}
        />
      );
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <nav>
        <div className={classes.toolbar}>
          <div className="SideBar-LogoWrapper">
            <h2>{content.brandname}</h2>
          </div>
          <Divider />
        </div>
        <List component="nav">{this.renderLinks()}</List>
      </nav>
    );
  }
}

export default withStyles(layoutStyles)(Sidebar);
