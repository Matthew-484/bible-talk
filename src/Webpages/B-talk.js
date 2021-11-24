import React, { Component } from "react";
import "../App.css";
import CommentBoxes from "../components/commentBoxes";
import Button from "@material-ui/core/Button";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import TextField from "@material-ui/core/TextField";

const buttonStyle = {
  position: "relative",
  marginTop: 32,
  marginLeft: 20,
  width: 100,
  height: 50,
  fontWeight: "bold",
};

const questionInput = {
  position: "relative",
  display: "flex",
  flexDirection: "row",
  width: 800,
  marginBottom: 30,
};

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
  },
});

const localData = localStorage.getItem("commentBoxes");

class Btalk extends Component {
  state = {
    commentBoxes: localData ? JSON.parse(localData) : [],
    questionText: null,
    answerText: null,
  };

  updateQuestionValue = (questionText) => {
    this.setState({ questionText });
  };

  handleQuestionSubmit = (e) => {
    e.preventDefault();

    const commentBoxes = this.state.commentBoxes;
    if (this.state.questionText) {
      commentBoxes.push({ question: this.state.questionText, answers: [] });
      this.setState({ commentBoxes });
      localStorage.setItem("commentBoxes", JSON.stringify(commentBoxes));
    }
  };

  updateAnswerValue = (answerText) => {
    this.setState({ answerText });
  };

  handleAnswerSubmit = (e, questionId) => {
    e.preventDefault();

    const commentBoxes = this.state.commentBoxes;

    if (this.state.answerText) {
      commentBoxes[questionId].answers.push(this.state.answerText);
      this.setState({ commentBoxes });
      localStorage.setItem("commentBoxes", JSON.stringify(commentBoxes));
    }
  };

  render() {
    return (
      <div className="pages">
        <ThemeProvider theme={theme}>
          <CommentBoxes
            contents={this.state.commentBoxes}
            handleAnswerSubmit={this.handleAnswerSubmit}
            updateAnswerValue={this.updateAnswerValue}
          />
          <form
            noValidate
            autoComplete="off"
            onSubmit={this.handleQuestionSubmit}
          >
            <div style={questionInput}>
              <TextField
                variant="outlined"
                placeholder="Type Question Here..."
                color="primary"
                style={{ marginTop: 30 }}
                fullWidth
                onChange={(e) => this.updateQuestionValue(e.target.value)}
              />
              <Button
                style={buttonStyle}
                size="large"
                variant="contained"
                color="primary"
                type="submit"
              >
                Add
              </Button>
            </div>
          </form>
        </ThemeProvider>
      </div>
    );
  }
}

export default Btalk;
