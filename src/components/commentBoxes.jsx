import React, { Component } from "react";
import CommentBox from "./commentBox";

class CommentBoxes extends Component {
  render() {
    const { contents, handleAnswerSubmit, updateAnswerValue } = this.props;
    return (
      <div>
        {contents.map((content) => {
          return (
            <CommentBox
              question={content.question}
              answers={content.answers}
              handleAnswerSubmit={handleAnswerSubmit}
              updateAnswerValue={updateAnswerValue}
              id={contents.indexOf(content)}
            />
          );
        })}
      </div>
    );
  }
}

export default CommentBoxes;
