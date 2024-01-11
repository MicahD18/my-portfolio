import React, { useState } from "react";

import { images } from "../../constants";

import "./Navbar.css";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(() => ({
  menu: {
    color: "#18274C",
    "@media (min-width: 750px)": {
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
    "@media (max-width: 750px)": {
      display: "none",
    },
  },
  appBar: {
    backgroundColor: "#18274C",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "fixed",
    width: "100%",
    marginTop: "-25px",
    zIndex: 10,
  },
  app__navbar_logo: {
    width: "225px",
    height: "125px",
  },
  app__navbar_menu: {
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    color: "#18274C",
    "@media (min-width: 750px)": {
      display: "none",
    },
  },
  app__navbar_links: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    marginTop: "75px",
    marginLeft: "50px",
  },
  mobile__navbar_menu: {
    backgroundColor: "#18274C",
    position: "fixed",
    float: "right",
    top: 0,
    bottom: 0,
    right: 0,
    zIndex: 5,
    padding: "1rem",
    width: "50%",
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    zIndex: 10,
    "@media (min-width: 750px)": {
      display: "none",
    },
  },
  close__button: {
    width: "35px",
    height: "35px",
    color: "white",
    margin: "0.5rem 32vw",
    marginTop: "30px",
  },
}));

const menuItems = [
  { name: "home" },
  { name: "about" },
  { name: "work" },
  { name: "skills" },
  { name: "contact" },
];

const Navbar = () => {
  const classes = useStyles();

  const [toggle, setToggle] = useState(false);

  return (
    <nav>
      <div style={{ paddingTop: "25px" }}>
        <Toolbar position="static" className={classes.appBar}>
          <img
            src={images.logo}
            alt="logo"
            className={classes.app__navbar_logo}
          />
          <div className="app__navbar-links">
            {menuItems.map((item, index) => {
              return (
                <li key={index}>
                  <div />
                  <a href={`#${item.name}`}>{item.name}</a>
                </li>
              );
            })}
          </div>
          <div className={classes.app__navbar_menu}>
            <IconButton className={classes.menu}>
              <MenuIcon
                onClick={() => setToggle(true)}
                style={{ color: "#18274C" }}
              />
            </IconButton>
          </div>
        </Toolbar>
      </div>

      {toggle && (
        <div className={classes.mobile__navbar_menu}>
          <IconButton className={classes.close__button}>
            <CloseIcon onClick={() => setToggle(false)} />
          </IconButton>
          <div className={classes.app__navbar_links}>
            {menuItems.map((item, index) => {
              return (
                <div>
                  <li
                    key={index}
                    style={{
                      marginBottom: "45px",
                      display: "flex",
                      flexDirection: "column",
                      fontSize: "18px",
                      textDecoration: "none",
                    }}
                  >
                    <a
                      style={{ textDecoration: "none" }}
                      href={`#${item.name}`}
                    >
                      {item.name}
                    </a>
                  </li>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
