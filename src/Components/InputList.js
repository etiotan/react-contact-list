import React from 'react'

export default class InputList extends React.Component {

    render() {

        return (

            <div className="col s12 m4">
                <br></br>
                <form onSubmit={this.props.handleSubmit.bind(this)}>
                    <label>Name</label>
                    <input onChange={this.props.handleChange.bind(this, "name")} value={this.props.value.name}/>
                    <label>Phone</label>
                    <input onChange={this.props.handleChange.bind(this, "phoneNumber")} value={this.props.value.phoneNumber}/>
                    <label>Email</label>
                    <input onChange={this.props.handleChange.bind(this, "email")} value={this.props.value.email}/>
                    <button className="btn cyan lighten-3" type="submit" name="action">Submit</button>
                </form>

            </div>

        )

    }

}
