import React, { Component } from 'react';
import ContactList from '../../components/ContactList'
import ContactService from '../../services/ContactService.js'
import ContactFilter from '../../components/ContactFilter/ContactFilter'
import './ContactPage.css'


class ContactPage extends Component {
    constructor (){
        super();
        this.state={
            contacts:[] 
        }
        this.loadContacts = this.loadContacts.bind(this);
    }

    componentDidMount(){
        ContactService.getContacts()
        .then(contacts => {this.setState({contacts})
        })  
    }
    loadContacts (filter){
        ContactService.getContacts({term: filter})
        .then(contacts=> this.setState({contacts}))
    }
    
    render() {
        return (
            <div>
                <div> <ContactFilter setFilter={this.loadContacts}/></div>
                <div>
                    <ContactList  getContact={this.getContact} contacts={this.state.contacts}/>
                </div>
            </div>
        )
    }
}
    export default ContactPage
