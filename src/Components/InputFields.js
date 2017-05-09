import React from 'react'


export default class InputFields extends React.Component{


addContacts(event){
    event.preventDefault();
    let name = this.refs.name.value.trim(),
    phone = this.refs.phone.value.trim(),
    email = this.refs.email.value.trim();
    console.log(name,phone,email);

    this.refs.name.value = "";
    this.refs.phone.value = "";
    this.refs.email.value = "";
}


    render(){

        return(


            <div className="col s4">
            <form>

                <input ref="name" />
                <label>Name</label>
                <input ref="phone" />
                <label>Phone</label>
                <input ref="email" />
                <label>Email</label>

            </form>

            <button onClick={this.addContacts.bind(this)} className="btn cyan lighten-3" type="submit" name="action">Submit</button>


        </div>




        )










    }





}
