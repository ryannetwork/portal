import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";

import { content } from "../config";

class Openings extends Component {
  renderLink = itemProps => <Link {...itemProps} />;

  render() {
    return (
      <div className="ErrorPage">
        <Button
          variant="outlined"
          color="primary"
          to={content.pages.error_page.link.path}
          component={this.renderLink}
        >
          <ArrowBack style={{ marginRight: 10 }} />
          {content.pages.error_page.link.title}
        </Button>
        <div className="error-code">{content.pages.error_page.message}</div>
      </div>
    );
  }
}
export default Openings;
