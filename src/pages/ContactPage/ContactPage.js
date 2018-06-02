import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadContacts } from '../../store/actions';

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
        this.loadContacts = this.loadContacts.bind (this)
    }

    componentDidMount(){
        console.log ('this.props', this.props);
        this.props.fetchContacts();
    }

    loadContacts(term){
        this.props.fetchContacts({term});
    }

    render() {
        return (
            <div>
                <div> <ContactFilter setFilter={this.loadContacts}/></div>
                <div>
                    <ContactList  getContact={this.getContact} contacts={this.props.contacts}/>
                </div>
            </div>
        )
    }
}
    // export  {ContactPage}

    const mapStateToProps = (state) => {
        return {
            contacts: state.contactsReducer.contacts,
        };
      };
      
      const mapActionToProps = (dispatch) => {
        return bindActionCreators({
            fetchContacts: loadContacts
            }, dispatch)
      };
      
      // export default TodoApp;
      export default connect(mapStateToProps, mapActionToProps)(ContactPage);