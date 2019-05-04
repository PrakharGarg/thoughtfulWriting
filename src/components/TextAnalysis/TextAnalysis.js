import React, { Component } from "react";
import "./TextAnalysis.css";

class TextAnalysis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sentimentScore: this.props.sentimentScore,
      sentimentComparative: this.props.sentimentComparative
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.sentimentScore !== this.props.sentimentScore) {
      this.setState({ sentimentScore: this.props.sentimentScore });
    }
    if (prevProps.sentimentComparative !== this.props.sentimentComparative) {
      this.setState({ sentimentComparative: this.props.sentimentComparative });
    }
  }
  render() {
    return (
      <div className="TextAnalysis">{this.state.sentimentComparative}</div>
    );
  }
}

export default TextAnalysis;
