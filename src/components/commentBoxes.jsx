import React, { Component } from "react";
import CommentBox from "./commentBox";

class CommentBoxes extends Component {
  render() {
    const { contents } = this.props;
    return (
      <div>
        {contents.map((content) => {
          return (
            <CommentBox question={content.question} answers={content.answers} />
          );
        })}
      </div>
    );
  }
}

export default CommentBoxes;
