import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import ContactService from '../../services/ContactService.js'
import './ContactDetailsPage.css'


class ContactDetailsPage extends Component {
    constructor() {
        super(),
            this.state = {
                contact: {}
            }
    }
    componentDidMount() {
        const id = this.props.match.params.id
        ContactService.getContactById(id).then(cont => {
            this.setState({ contact: cont })
        })
    }

    render() {
        let {contact} = this.state;
        if (contact) {
            return (
                <div className="container">
                    <div className="flex space-between">
                        <button>Back</button>
                        <button><Link to={`/contact/edit/${contact._id}`} >Edit</Link></button>
                    </div>    
                    <div className="img-hold"><img src={contact.picture} /></div>
                    <p>Name: {contact.name}</p>
                    <p>Phone: {contact.phone}</p>
                    <p>Email: {contact.email}</p>
                </div>
            )
        }
        else return null;
    }
}

export default ContactDetailsPage
