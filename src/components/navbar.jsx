import { AppBar, IconButton, Button } from "@material-ui/core";
import ToolBar from "@material-ui/core/Toolbar";
import navBarIcon from "../images/cross.png";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
  },
});

const buttonStyle = {
  color: "white",
  fontSize: 20,
  marginLeft: 40,
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
};

function NavBar() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <AppBar className="appBar" color="primary" position="fixed">
          <ToolBar>
            <IconButton>
              <img
                src={navBarIcon}
                alt="Unable to Load"
                style={{
                  height: 55,
                  width: 45,
                }}
              />
            </IconButton>

            <Button style={buttonStyle}>
              <Link exact to="/" style={linkStyle}>
                Home
              </Link>
            </Button>
            <Button style={buttonStyle}>
              <Link exact to="/Btalk" style={linkStyle}>
                B-talk
              </Link>
            </Button>
          </ToolBar>
        </AppBar>
        <ToolBar />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default NavBar;
