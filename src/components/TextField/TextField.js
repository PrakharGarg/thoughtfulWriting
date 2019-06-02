import React, { Component } from "react";
import "./TextField.css";
import ISimpleMDE from "react-simplemde-v1";
import Sentiment from "sentiment";
import "simplemde/dist/simplemde.min.css";
import TextAnalysis from "../TextAnalysis/TextAnalysis";
import RecArticles from "../RecArticles/RecArticles";

class TextField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      sentimentScore: 0,
      sentimentComparative: 0,
      positiveWords: [],
      negativeWords: [],
      ents: [],
      recArticles: []
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.getItems(), 10000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (JSON.stringify(prevState.ents) !== JSON.stringify(this.state.ents)) {
      this.newsAPI();
    }
  }

  newsAPI() {
    var query = "";
    var subjects = this.state.ents;
    subjects.forEach(subject => {
      subject = subject.replace(/ /g, "+");
      query += subject;
      query += "+";
    });
    query = query.substr(0, query.length - 1);

    var url =
      "https://newsapi.org/v2/everything?q=" +
      query +
      "&pageSize=5&apiKey=d3bed521b6ec4adeabcd74ba5fae94e2";

    fetch(url)
      .then(response => response.json())
      .then(response => this.setState({ recArticles: response.articles }));
  }

  getItems() {
    const url = "http://localhost:5000/api";
    if (this.state.value && this.state.value.length > 0)
      fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json"
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(this.state.value) // body data type must match "Content-Type" header
      })
        .then(response => response.json())
        .then(response => this.setState({ ents: response }));
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
        <RecArticles articles={this.state.recArticles} />
      </div>
    );
  }
}

export default TextField;
