import React, { Component } from "react";
import "./TextAnalysis.css";
import ReactSvgPieChart from "react-svg-piechart";

class TextAnalysis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sentimentScore: this.props.sentimentScore,
      positiveScore: 0,
      negativeScore: 0
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.sentimentScore !== this.props.sentimentScore) {
      const currentScore = this.props.sentimentScore;
      if (prevProps.sentimentScore < currentScore) {
        const positiveDifference = currentScore - prevProps.sentimentScore;
        const newPositiveScore = this.state.positiveScore + positiveDifference;
        this.setState({ positiveScore: newPositiveScore });
      } else {
        const negativeDifference = prevProps.sentimentScore - currentScore;
        const newNegativeScore = this.state.negativeScore + negativeDifference;
        this.setState({ negativeScore: newNegativeScore });
      }
    }
  }
  render() {
    const positiveLength = this.props.positiveWords
      ? this.props.positiveWords.length
      : 0;
    const negativeLength = this.props.negativeWords
      ? this.props.negativeWords.length
      : 0;

    console.log(this.props);
    const pieChartData = [
      {
        title: "Positive",
        value: positiveLength,
        color: "#00FF65"
      },
      {
        title: "Negative",
        value: negativeLength,
        color: "#FF0000"
      }
    ];
    return (
      <div className="TextAnalysis">
        <ReactSvgPieChart
          data={pieChartData}
          // If you need expand on hover (or touch) effect
          expandOnHover
          startAngle={90}
        />
      </div>
    );
  }
}

export default TextAnalysis;
