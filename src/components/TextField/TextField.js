import React, { Component } from 'react';
import './TextField.css';
import ISimpleMDE from 'react-simplemde-v1';
import Sentiment from 'sentiment';
import 'simplemde/dist/simplemde.min.css';
import TextAnalysis from '../TextAnalysis/TextAnalysis';

class TextField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            sentimentScore: 0,
        };
      }

    render() {
        const sentiment = new Sentiment();
        const option = {
            autofocus:true,
            toolbar: true,
            parsingConfig: {allowAtxHeaderWithoutSpace: true},
        };
        const onEvents = {
            change: function() {
                that.setState({
                    value: this.value(),
                    sentimentScore: sentiment.analyze(this.value())
                })
            }
        }
        return (
            <div className="TextField">
                <div className="Input">
                    {/* <textarea autoFocus value={this.state.value} onChange={this.handleChange}></textarea> */}
                    <ISimpleMDE
                        option={option}
                        className='simplemde'
                        onEvents={onEvents}
                    />
                </div>
                <TextAnalysis />
            </div>  
        );
    }
}

export default TextField;