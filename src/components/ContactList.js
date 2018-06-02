import React from 'react';
import ContactPrev from './ContactPrev'
import {Link} from 'react-router-dom'


const ContactList = (props) => {
    
    const contacts = props.contacts
    return (
        <ul>
            {contacts && contacts.map((contact, i) =>

                <li key={i}> <Link to={`contact/${contact._id}`}> <ContactPrev contact={contact} /> </Link> </li>
            )}
        </ul>
    )
}
export default ContactList
