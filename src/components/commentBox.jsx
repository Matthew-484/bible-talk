import React, { Component } from "react";
import "../App.css";
import TextField from "@material-ui/core/TextField";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import Answers from "./answers";
import Button from "@material-ui/core/Button";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
  },
});

const enterButtonStyle = {
  marginTop: 20,
  marginLeft: 330,
  fontWeight: "bold",
  width: 100,
};

class CommentBox extends Component {
  render() {
    const { question, answers } = this.props;

    return (
      <div className="commentBoxDiv">
        <h1 className="commentBoxTitle">Question:</h1>
        <h4 className="questionText">{question}</h4>

        <h2 className="commentBoxTitle" style={{ marginTop: 20 }}>
          Answers:
        </h2>

        {answers.map((answer) => {
          return <Answers answer={answer} />;
        })}

        <ThemeProvider theme={theme}>
          <TextField
            variant="outlined"
            placeholder="Type answer here..."
            style={{ marginLeft: 30 }}
          />

          {
            // Add onClick function to add this to local storage
            // (get data from curret local storage, add new input, then add new list to local storage)
          }

          <Button
            size="large"
            variant="contained"
            style={enterButtonStyle}
            color="primary"
          >
            Enter
          </Button>
        </ThemeProvider>
        {
          // When text is entered call a function that will add the answer to an array
        }
      </div>
    );
  }
}

export default CommentBox;
