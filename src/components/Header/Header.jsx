import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import {
  AppBar,
  Toolbar,
  Typoography,
  InputBase,
  Box,
  Typography,
} from "@material-ui/core";
import { SearchIcon } from "@material-ui/icons";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography varient="h5" className={classes.title}>
          Soul Food
        </Typography>
        <Box display="flex">
          <Typography varient="h6" className={classes.title}>
            Soul filling food
          </Typography>
          <Autocomplete>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase placeholder="Search..."
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
