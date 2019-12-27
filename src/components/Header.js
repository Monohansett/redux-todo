import React, { Component } from "react";
import { Box, Grid } from "@material-ui/core";
import SearchInput from "./SearchInput";

class Header extends Component {
  render() {
    return (
      <Grid container>
        <Grid item lg={8}>
          <Box display="flex" alignItems="center">
            To-Do List
          </Box>
        </Grid>
        <Grid item lg={4}>
          <SearchInput></SearchInput>
        </Grid>
      </Grid>
    );
  }
}

export default Header;
