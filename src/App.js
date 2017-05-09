import React, {Component} from 'react';
import ContactList from './Components/ContactList'

export default class App extends Component {
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
