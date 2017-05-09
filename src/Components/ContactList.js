import React from 'react'
import {contactData} from '../data/data.js'

//Mapped List for contacts
let list = contactData.map((data, index) => {
    return <li key={index}>Name: {data.name}
        Email: {data.email}
        Phone: {data.phone_number}</li>
})

export default class ContactList extends React.Component {

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
            email = this.refs.email.value.trim();
        console.log(name, phone, email);

        //create new object
        var o = {
            name: name,
            email: email,
            phone_number: phone
        }

        //clears inputs after submit
        contactData.push(o)
        this.setState({contacts: contactData})
        this.refs.name.value = "";
        this.refs.phone.value = "";
        this.refs.email.value = "";
    }

    render() {

        console.log(this.state.contacts)

        return (
            <div className="row container">
                <div className="col s4">
                    <form>
                        <input ref="name"/>
                        <label>Name</label>
                        <input ref="phone"/>
                        <label>Phone</label>
                        <input ref="email"/>
                        <label>Email</label>
                    </form>

                    <button onClick={this.addContacts.bind(this)} className="btn cyan lighten-3" type="submit" name="action">Submit</button>

                </div>

                <div className="col s8">
                    <table className="striped">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                        <tbody>
                            {this.state.contacts.map((data, index) => {
                                return <tr key={index}>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.phone_number}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>

                </div>
            </div>
        )

    }

}
