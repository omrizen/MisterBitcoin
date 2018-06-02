import React, { Component } from 'react';

import Input from '../../components/Input'
import ContactService from '../../services/ContactService'

import './ContactEditPage.css'  

class ContactEditPage extends Component {
    constructor() {
        super();
            this.state = {
                contact: ContactService.getEmptyContact()
            }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        if (this.props.match.params.id) {
            console.log('there is')
            const id = this.props.match.params.id
            ContactService.getContactById(id).then(contact => {
                this.setState({ contact })
            })
        }
    }
    updateInput = (obj) => {
        const contact = { ...this.state.contact };
        contact[Object.keys(obj)[0]] = obj[Object.keys(obj)[0]]
        this.setState({ contact })

    }
    handleSubmit(e) {
        e.preventDefault();
        ContactService.saveContact(this.state.contact)
            .then(contacts => {
                console.log('contacts', contacts)
                this.props.history.push('/contact')
            })

    }

    render() {
        let { contact } = this.state
        console.log('contact', contact.name)
        return (
            <div>
                {/* <div className="img-hold"><img src={contact.picture} /></div> */}
                <form onSubmit={this.handleSubmit}>

                <p>    <label> Name: <Input id="name" onInput={this.updateInput} value={this.state.contact.name} /></label></p>
                  <p>  <label> Phone: <Input id="phone" onInput={this.updateInput} value={this.state.contact.phone} /></label></p>
                    <p><label> Email: <Input id="email" onInput={this.updateInput} value={this.state.contact.email} /></label></p>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}
export default ContactEditPage

