import React from 'react'
import './styles.css'
import InputList from './Components/InputList'
import ContactList from './Components/ContactList'
import {contactData} from './data/data.js'

export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            contacts: contactData,
            name: "",
            email: "",
            phoneNumber: ""
        }
    }

    handleChange(inputName, event) {
        this.setState({[inputName]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        let o = {
            name: this.state.name,
            email: this.state.email,
            phone_number: this.state.phoneNumber
        }
        if (this.state.name) {
            this.state.contacts.push(o)
            this.setState({contacts: this.state.contacts, name: "", email: "", phoneNumber: ""})

        } else {
            alert('Please enter a Name')
        }

    }

    deleteContacts(index) {
        var contacts = this.state.contacts;
        contacts.splice(index, 1);
        this.setState({contacts});
    }

    sortContacts() {
        this.state.contacts.sort(function(a, b) {
            var textA = a.name.toUpperCase();
            var textB = b.name.toUpperCase();
            return (textA < textB)
                ? -1
                : (textA > textB)
                    ? 1
                    : 0;
        });
        this.setState(this.state.contacts)
    }

    render() {

        return (
            <div className="row container">
                <h1 className="center-align">
                    Contact List
                </h1>
                <InputList
                    handleChange={this.handleChange.bind(this)}
                    handleSubmit={this.handleSubmit.bind(this)}
                    value={this.state}/>
                <ContactList
                    deleteContacts={this.deleteContacts.bind(this)}
                    sortContacts={this.sortContacts.bind(this)}
                    contacts={this.state.contacts}/>
            </div>
        )

    }
}
