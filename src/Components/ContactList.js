import React from 'react'

export default class ContactList extends React.Component {

render(){
    return(

        <div className="col s12 m8">
            <table className="striped">
                <thead>
                    <tr>
                        <th className="sorter" onClick={this.props.sortContacts}>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.contacts.map((data, index) => {
                        return <tr key={index}>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.phone_number}</td>
                            <td>
                                <button onClick={this.props.deleteContacts} className="btn red">del</button>
                            </td>
                        </tr>
                    })}

                </tbody>
            </table>

        </div>




    )
}



    }
