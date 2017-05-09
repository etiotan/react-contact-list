import React, { Component } from 'react';
import TableExampleComplex from './Components/ContactList'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import InputFields from './Components/InputFields'
import ContactList from './Components/ContactList'



export default class App extends Component {
  render() {
    return (
      <div className="App blue-text container row">

        <h1 className="center-align">
            Contact List
        </h1>

        <InputFields />
        <ContactList />
      </div>
    );
  }
}
