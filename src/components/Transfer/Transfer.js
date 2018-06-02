import React, { Component } from 'react';



class Transfer extends Component {
    componentWillMount (){
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleSubmit(){
        this.props.transferAmount(this.amount);
    }
    render() {
        return (

            <div>
                <h2>Want to transfer coins?</h2>
                <p>Amount : <input ref = {input => this.amount = input} />
                <button onClick={this.handleSubmit}>Transfer</button>
                </p>
                 



            </div>
        )
    }
}
export default Transfer
