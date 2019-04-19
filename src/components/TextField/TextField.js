import React, { Component } from 'react';
import './TextField.css';
import ISimpleMDE from 'react-simplemde-v1';
import 'simplemde/dist/simplemde.min.css';

class TextField extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }
    render() {
        const option = {
            autofocus:true,
            toolbar: true,
            parsingConfig: {allowAtxHeaderWithoutSpace: true},
        };
        return (
            <div className="TextField">
                <div className="Input">
                    {/* <textarea autoFocus value={this.state.value} onChange={this.handleChange}></textarea> */}
                    <ISimpleMDE
                        option={option}
                        className='simplemde'
                    />
                </div>
            </div>  
        );
    }
}

export default TextField;