import React, { Component } from 'react';

class ContactFilter extends Component {
    constructor (){
        super();
    this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        console.log ('e' , e.target.value);
        this.props.setFilter(e.target.value)
        console.log ('this.props' , this)
    }
    render() {
        return (
            <div className="contact-filter">
                <div>filter</div>
                <form onSubmit={e => e.preventDefault()} >
                    <input onInput={this.handleInput}  type="text" name="name" />
                </form>
            </div>
        )
    }
}
export default ContactFilter
