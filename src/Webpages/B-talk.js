import React, { Component, useEffect } from "react";
import "../App.css";
import CommentBoxes from "../components/commentBoxes";
import Button from "@material-ui/core/Button";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const buttonStyle = {
  position: "relative",
  marginTop: 50,
  fontWeight: "bold",
};

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
  },
});

const Observer = ({ value }) => {
  useEffect(() => {
    localStorage.setItem("commentBoxes", JSON.stringify(value));
  }, [value]);
  return null;
};

const localData = localStorage.getItem("commentBoxes");

class Btalk extends Component {
  state = {
    commentBoxes: localData ? JSON.parse(localData) : [],
  };

  render() {
    return (
      <div className="pages">
        <Observer value={this.state.commentBoxes} />
        <ThemeProvider theme={theme}>
          <Button
            style={buttonStyle}
            size="large"
            variant="contained"
            color="primary"
          >
            Add Question
          </Button>
        </ThemeProvider>
        <CommentBoxes contents={this.state.commentBoxes} />
      </div>
    );
  }
}

export default Btalk;
