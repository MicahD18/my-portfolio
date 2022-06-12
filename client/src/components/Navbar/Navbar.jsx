import React, { useState } from "react";

import { images } from "../../constants";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  app__navbar: {
    flexGrow: 1,
  },
  menu: {
    marginRight: theme.spacing(2),
    "@media (min-width: 800px)": {
      display: "none",
    },
  },
  title: {
    listStyle: "none",
    display: "flex",
    flexDirection: "row",
    color: "black",
    justifyContent: "space-around",
    width: "40vw",
    marginLeft: "15vw",
    "@media (max-width: 800px)": {
      display: "none",
    },
  },
  appBar: {
    backgroundColor: "#F0F0F0",
  },
  app__navbar_logo: {
    width: "225px",
    height: "125px",
  },
  app__navbar_menu: {
    float: "right",
    marginTop: "-75px",
    "@media (min-width: 800px)": {
      display: "none",
    },
  },

  mobileMenuBar: {
    width: "50vw",
    height: "50vh",
    backgroundColor: "red",
    float: "right",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const [toggle, setToggle] = useState(false);

  return (
    <nav className={classes.app__navbar}>
      <div position="static" className={classes.appBar}>
        <Toolbar>
          <img
            src={images.logo}
            alt="logo"
            className={classes.app__navbar_logo}
          />
          <div className={classes.title}>
            {["home", "about", "work", "skills", "contact"].map(
              (item, index) => {
                return (
                  <li key={index}>
                    <a>{item}</a>
                  </li>
                );
              }
            )}
          </div>
        </Toolbar>
      </div>

      <div position="static" className={classes.app__navbar_menu}>
        <IconButton className={classes.menu}>
          <MenuIcon onClick={() => setToggle(true)} />
        </IconButton>

        {toggle && (
          <div className={classes.mobileMenuItems}>
            <IconButton>
              <CloseIcon onClick={() => setToggle(false)} />
            </IconButton>

            {["home", "about", "work", "skills", "contact"].map(
              (item, index) => {
                return (
                  <li key={index}>
                    <a>{item}</a>
                  </li>
                );
              }
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
