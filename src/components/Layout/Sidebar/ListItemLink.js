import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";

class ListItemLink extends Component {
  state = {
    open: false
  };
  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };
  renderLink = itemProps => <Link to={this.props.to} {...itemProps} />;
  render() {
    const { icon, primary } = this.props;
    return (
          <ListItem button component={this.renderLink}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={primary} />
          </ListItem>
    );
  }
}

export default ListItemLink;
