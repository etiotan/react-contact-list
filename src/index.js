import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

import ContactList from './Components/ContactList'

class App extends React.Component {


    render() {
        return (
            <div>

                <h1 className="center-align blue-text">
                    Contact List
                </h1>

                <ContactList/>

            </div>
        );
    }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
