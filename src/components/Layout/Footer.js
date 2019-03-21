import React from "react";
import { Button, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import { layout } from "../../config";

const Footer = () => (
  <Paper style={{ marginBottom: 16 }}>
    <footer className="rct-footer d-flex justify-flex- align-items-center">
      <ul className="list-inline footer-menus mb-0">
        {layout.footer_links &&
          layout.footer_links.map(l => {
            return (
              <li key={l.url} className="list-inline-item">
                <Button component={Link} to={l.url}>
                  {l.title}
                </Button>
              </li>
            );
          })}
      </ul>
    </footer>
  </Paper>
);

export default Footer;
