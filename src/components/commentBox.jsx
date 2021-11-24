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
  marginLeft: 20,
  fontWeight: "bold",
  width: 100,
  height: 55,
};

const answerInput = {
  display: "flex",
  flexDirection: "row",
  marginTop: 20,
  width: 750,
};

class CommentBox extends Component {
  state = {
    textValue: null,
  };

  render() {
    const { question, answers, handleAnswerSubmit, updateAnswerValue } =
      this.props;

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

        <div style={answerInput}>
          <ThemeProvider theme={theme}>
            <form
              noValidate
              autoComplete="off"
              onSubmit={(e) => handleAnswerSubmit(e, this.props.id)}
            >
              <TextField
                variant="outlined"
                placeholder="Type answer here..."
                style={{ marginLeft: 30, width: 600 }}
                onChange={(e) => updateAnswerValue(e.target.value)}
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
                type="submit"
              >
                Add
              </Button>
            </form>
          </ThemeProvider>
        </div>
        {
          // When text is entered call a function that will add the answer to an array
        }
      </div>
    );
  }
}

export default CommentBox;
