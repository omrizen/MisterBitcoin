import React, { Component } from 'react';


import ContactService from '../../services/ContactService'

class ContactEditPage extends Component {
    constructor() {
        super(),
            this.state = {
                contact: {
                    id: '',
                    name: '',
                }
            }
    }
    componentDidMount() {
        if (this.props.match.params.id) {
            const id = this.props.match.params.id
            ContactService.getContactById(id).then(contact => {
                this.setState({contact})
            })
        }
    }

    render() {
        let {contact} = this.state
        console.log ('contact' , contact.name)
        return (
            <div>
                <div className="img-hold"><img src={contact.picture} /></div>
                <label>Name: <input placeholder={contact.name} defaultValue={contact.name}/> </label>
                {/* <p>Phone: {contact.phone}</p>
                <p>Email: {contact.email}</p> */}

            </div>
        )
    }
}
export default ContactEditPage