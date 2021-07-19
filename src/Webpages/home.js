import React, { Component } from "react";
import "../App.css";
import bibleImage from "../images/bible.jpeg";
import { LoremIpsum } from "lorem-ipsum";
import bibleStudyImage from "../images/bible-study.jpeg";
import Button from "@material-ui/core/Button";

const lorem = new LoremIpsum({
  wordsPerSentence: {
    max: 10,
    min: 4,
  },
});

const buttonStyle = {
  backgroundColor: "white",
  color: "black",
  fontWeight: "bold",
  fontSize: 25,
  margin: 30,
  borderRadius: 30,
};

function displayStudy(showStudy) {
  if (showStudy === true) {
    console.log("showStudy is true");
    return (
      <div className="bible-study-div">
        <h1 className="title">Bible Study</h1>

        <div className="image-div">
          <img
            className="home-images"
            src={bibleStudyImage}
            alt="Unable to Load"
          />
          <h3 className="writing">{lorem.generateSentences(6)}</h3>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

class home extends Component {
  state = {
    showStudy: false,
  };

  handleSwitch = () => {
    const showStudy = !this.state.showStudy;
    this.setState({ showStudy });
  };

  render() {
    return (
      <div className="divStyle2">
        <div className="divStyles">
          <h1 className="title">Verse of the Day</h1>

          <div className="image-div">
            <img
              className="home-images"
              src={bibleImage}
              alt="Unable to Load"
            />
            <h3 className="writing">{lorem.generateSentences(5)}</h3>
          </div>
        </div>
        <div className="home-button-div">
          <Button
            onClick={this.handleSwitch}
            size="large"
            variant="outlined"
            style={buttonStyle}
          >
            Click for Bible Study
          </Button>
        </div>

        {displayStudy(this.state.showStudy)}
      </div>
    );
  }
}

export default home;
