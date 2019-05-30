import React, { Component } from "react";
import "./TextField.css";
import ISimpleMDE from "react-simplemde-v1";
import Sentiment from "sentiment";
import "simplemde/dist/simplemde.min.css";
import TextAnalysis from "../TextAnalysis/TextAnalysis";

class TextField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      sentimentScore: 0,
      sentimentComparative: 0,
      positiveWords: [],
      negativeWords: []
    };
  }

  render() {
    const that = this;
    const sentiment = new Sentiment();
    const option = {
      autofocus: true,
      toolbar: true,
      parsingConfig: { allowAtxHeaderWithoutSpace: true }
    };
    const onEvents = {
      change: function() {
        const sentimentObj = sentiment.analyze(this.value());
        if (
          this.value()
            .substr(this.value().length - 1)
            .match(/^[.,:!? ]/)
        ) {
          that.setState({
            value: this.value(),
            sentimentScore: sentimentObj.score,
            sentimentComparative: sentimentObj.comparative,
            positiveWords: sentimentObj.positive,
            negativeWords: sentimentObj.negative
          });
        }
      }
    };
    return (
      <div className="TextField">
        <div className="Input">
          {/* <textarea autoFocus value={this.state.value} onChange={this.handleChange}></textarea> */}
          <ISimpleMDE
            option={option}
            className="simplemde"
            onEvents={onEvents}
          />
        </div>
        <TextAnalysis
          sentimentScore={this.state.sentimentScore}
          sentimentComparative={this.state.sentimentComparative}
          positiveWords={this.state.positiveWords}
          negativeWords={this.state.negativeWords}
        />
      </div>
    );
  }
}

export default TextField;
