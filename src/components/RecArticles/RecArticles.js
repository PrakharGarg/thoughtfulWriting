import React, { Component } from "react";
import "./RecArticles.css";

class RecArticles extends Component {
  render() {
    const articleItems = this.props.articles.map(function(article, i) {
      return (
        /* eslint-disable no-unused-expressions */
        <div className="article" key={i}>
          <a className="title" href={article.url} target="_blank">
            {article.title}
          </a>
          <br />
          <br />
        </div>
      );
    });
    console.log(articleItems);
    return <div className="RecArticle">{articleItems}</div>;
  }
}

export default RecArticles;
