import React, { Component } from 'react';

class ContactList extends Component {

    render() {
        const contact = this.props.contact
        return (
            <div className="flex align-center contact-prev" >
                <div><img src={contact.picture} /></div>
                <p className="name">{contact.name} </p>
            </div>
        )

    }
}
export default ContactList