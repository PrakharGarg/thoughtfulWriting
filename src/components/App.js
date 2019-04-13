import React, { Component } from 'react';
import './App.css';
import TextField from './TextField/TextField';
import NotesList from './NotesList/NotesList';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <NotesList /> */}
        <TextField />
      </div>
    );
  }
}

export default App;
