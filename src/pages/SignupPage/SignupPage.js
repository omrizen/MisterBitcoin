import React, { Component } from 'react';
import Input from '../../components/Input'
import { connect } from 'react-redux';
import {addUser} from '../../store/actions'
import UserService from '../../services/UserService'


class SignupPage extends Component {
    constructor() {
        super();
            this.state = {
                user: UserService.getEmptyUser()
            }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.dispatch (addUser(this.state.user))
        this.props.history.push('/');
    }
    
    updateInput = (obj) => {
        const user = { ...this.state.user };
        user[Object.keys(obj)[0]] = obj[Object.keys(obj)[0]]
        this.setState({ user })

    }
    render() {
        return (
            <div className="singup">
                Signup
                <form onSubmit={this.handleSubmit}>
                    <label> Name: <Input id="name" onInput={this.updateInput} /> </label>
                    <button>Save</button>
                </form>
            </div>
        )

    }
}
export default connect()(SignupPage);