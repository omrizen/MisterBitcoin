import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import ContactService from '../../services/ContactService.js'
import UserService from '../../services/UserService.js'
import Transfer from '../../components/Transfer/Transfer'
import {addMove} from '../../store/actions'

import './ContactDetailsPage.css'


class ContactDetailsPage extends Component {
    constructor() {
        super();
        this.state = {
            contact: {}
        }
        this.handleTransfer = this.handleTransfer.bind(this)
    }
    componentDidMount() {
        const id = this.props.match.params.id
        ContactService.getContactById(id).then(cont => {
            this.setState({ contact: cont })
        })
    }
    handleTransfer(amount) {
        this.move = {
            name: this.state.contact.name,
            amount
        }
        this.props.dispatch(addMove(this.move));
    }

    render() {
        let { contact } = this.state;
        if (contact) {
            return (
                <div className="container">
                    <div  className="buttons flex space-between">
                        <button> <Link to={`/contact`}>Back</Link> </button>
                        <button><Link to={`/contact/edit/${contact._id}`} >Edit</Link></button>
                    </div>
                    <div className="img-hold"><img src={contact.picture} /></div>
                    <p>Name: {contact.name}</p>
                    <p>Phone: {contact.phone}</p>
                    <p>Email: {contact.email}</p>
                    <div className="transfer">
                    <Transfer    transferAmount={this.handleTransfer} />
                    </div>
                </div>

            )
        }
        else return null;
    }
}

export default connect ()(ContactDetailsPage)
