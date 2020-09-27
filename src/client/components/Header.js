import React from "react";
import { AppBar, Typography } from "@material-ui/core";

const Header = () => (
  <nav aria-label="main navigation">
    <AppBar position="static">
      <Typography variant="h6">SpaceX Launch Programs</Typography>
    </AppBar>
  </nav>
);
export default Header;
