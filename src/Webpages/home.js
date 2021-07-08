import React, { Component } from "react";
import "../App.css";
import bibleImage from "../images/bible.jpeg";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  wordsPerSentence: {
    max: 10,
    min: 4,
  },
});

class home extends Component {
  state = {};
  render() {
    return (
      <div className="divStyles">
        <h1 className="title">Verse of the Day</h1>

        <div className="verse-div">
          <img className="verse-image" src={bibleImage} alt="Unable to Load" />
          <h4 className="verse">{lorem.generateSentences(5)}</h4>
        </div>
      </div>
    );
  }
}

export default home;
