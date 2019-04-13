import React, { Component } from 'react';
import './TextField.css';

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
        return (
            <div className="TextField">
                <div className="Input">
                    <textarea autoFocus value={this.state.value} onChange={this.handleChange}></textarea>
                </div>
            </div>  
        );
    }
}

export default TextField;