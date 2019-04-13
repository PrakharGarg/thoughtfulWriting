import React, { Component } from 'react';
import './TextField.css';

class TextField extends Component {
    render() {
        return (
            <div className="TextField">
                <div className="Input">
                    <textarea autoFocus></textarea>
                </div>
            </div>  
        );
    }
}

export default TextField;