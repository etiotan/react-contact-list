import React, { Component } from 'react';
import TableExampleComplex from './Components/ContactList'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import InputFields from './Components/InputFields'




export default class App extends Component {
  render() {
    return (
      <div className="App blue-text">

        <h1>
            Contact List
        </h1>

        <InputFields />

      </div>
    );
  }
}
