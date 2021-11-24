import React, { Component } from "react";
import "../App.css";
import bibleImage from "../images/bible.jpeg";
import bibleStudyImage from "../images/bible-study.jpeg";
import Button from "@material-ui/core/Button";

const buttonStyle = {
  backgroundColor: "white",
  color: "black",
  fontWeight: "bold",
  fontSize: 25,
  margin: 30,
  borderRadius: 30,
};

function displayStudy(showStudy, studyArray, index) {
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
          <h3 className="writing">{studyArray[index].study}</h3>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

const indexData = localStorage.getItem("index");
const dayData = localStorage.getItem("day");

class home extends Component {
  state = {
    showStudy: false,
    studyArray: [
      {
        verse:
          "For I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes: first to the Jew, then to the Gentile. For in the gospel the righteousness of God is revealed–a righteousness that is by faith from first to last, just as it is written: 'The righteous will live by faith.' Romans 1:16-17",
        study: "study 1",
      },
      { verse: "verse 2", study: "study 2" },
    ],
    index: indexData ? parseInt(indexData) : 0,
    day: dayData ? parseInt(dayData) : 10,
  };

  handleSwitch = () => {
    const showStudy = !this.state.showStudy;
    this.setState({ showStudy });
  };

  updateIndex = (length) => {
    const index = Math.floor(Math.random() * length);
    this.setState({ index });
    localStorage.setItem("index", this.state.index);
  };

  updateDay = (day) => {
    this.setState({ day });
    localStorage.setItem("day", this.state.day);
  };

  setBibleStudy = (studyArrayLength) => {
    const date = new Date();
    const currentDate = date.getDay();
    const day = parseInt(localStorage.getItem("day"));

    if (currentDate !== day) {
      this.updateIndex(studyArrayLength);
      this.updateDay(currentDate);
    }
  };

  render() {
    const { showStudy, studyArray, index } = this.state;

    return (
      <div className="divStyle2">
        {this.setBibleStudy(studyArray.length)}
        <div className="divStyles">
          <h1 className="title">Verse of the Day</h1>

          <div className="image-div">
            <img
              className="home-images"
              src={bibleImage}
              alt="Unable to Load"
            />
            <h3 className="writing">{studyArray[index].verse}</h3>
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

        {displayStudy(showStudy, studyArray, index)}
      </div>
    );
  }
}

export default home;
