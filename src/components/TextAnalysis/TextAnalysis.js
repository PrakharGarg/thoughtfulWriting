import React, { Component } from 'react';
import './TextAnalysis.css';

class TextAnalysis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sentimentScore: 0,
        };
    }
    render() {
        return (
            <div className="TextAnalysis">

            </div>  
        );
    }
}

export default TextAnalysis;