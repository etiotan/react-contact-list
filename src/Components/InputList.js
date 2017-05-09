import React from 'react'
import {contactData} from '../data/data.js'
import ContactList from './ContactList'

export default class InputList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            contacts: contactData
        }
    }

    addContacts(event) {
        event.preventDefault();
        let name = this.refs.name.value.trim(),
            phone = this.refs.phone.value.trim(),
            email = this.refs.email.value.trim()
        console.log(name, phone, email)

        //create new object
        var o = {
            name: name,
            email: email,
            phone_number: phone
        }
        //catch irregularities, they must enter name
        if (name) {
            this.state.contacts.push(o)
            this.setState({contacts: this.state.contacts})
        } else {
            alert('Please Enter a Name')
        }

        //clears inputs after submit
        this.refs.name.value = ""
        this.refs.phone.value = ""
        this.refs.email.value = ""

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

        console.log(this.state.contacts)

        return (
            <div className="row container">

                <div className="col s12 m4">
                    <br></br>
                    <form onSubmit={this.addContacts.bind(this)}>
                        <label>Name</label>
                        <input ref="name"/>
                        <label>Phone</label>
                        <input ref="phone"/>
                        <label>Email</label>
                        <input ref="email"/>

                        <button className="btn cyan lighten-3" type="submit" name="action">Submit</button>
                    </form>

                </div>

            <ContactList
                deleteContacts={this.deleteContacts.bind(this)}
                sortContacts={this.sortContacts.bind(this)}
                contacts={this.state.contacts}
            />


            </div>
        )

    }

}
