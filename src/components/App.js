import React, { Component } from 'react';
//import logo from './../logo.svg';
import './../App.css';
import AddNote from '../containers/addNote'
import NotesListCont from '../containers/NotesListCont'


class App extends Component {
  render() {
    return (
      <div>
        <AddNote />
        <NotesListCont />
      </div>
    );
  }
}

export default App;
