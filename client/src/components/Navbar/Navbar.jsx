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

const useStyles = makeStyles(() => ({
  menu: {
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
    backgroundColor: "#F0F0F0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
    backgroundColor: "blue",
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
    backgroundColor: "#F0F0F0",
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
    "@media (min-width: 750px)": {
      display: "none"
    }
  },
  close__button: {
    width: "35px",
    height: "35px",
    color: "black",
    margin: "0.5rem 42vw",
    marginTop: "30px",
  }
}));

const Navbar = () => {
  const classes = useStyles();

  const [toggle, setToggle] = useState(false);

  return (
    <nav>
      <div >
        <Toolbar position="static" className={classes.appBar}>
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
          <div className={classes.app__navbar_menu}>
            <IconButton className={classes.menu}>
              <MenuIcon
                onClick={() => setToggle(true)}
                style={{ color: "white" }}
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
          <ul className={classes.app__navbar_links}>
            {["home", "about", "work", "skills", "contact"].map(
              (item, index) => {
                return (
                  <div>
                    <li
                      key={index}
                      style={{
                        marginBottom: "45px",
                        cursor: "pointer",
                        display: "flex",
                        flexDirection: "column",
                        fontSize: "18px",
                      }}
                    >
                      <a>{item}</a>
                    </li>
                  </div>
                );
              }
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
