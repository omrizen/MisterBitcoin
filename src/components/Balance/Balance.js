import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Balance.css' 




class Balance extends Component {
    constructor() {
        super();
        this.getValueOfUserBitcoins = this.getValueOfUserBitcoins.bind(this);
    }

    getValueOfUserBitcoins() {
        console.log ('dadad');
        return ((this.props.balance * this.props.rate).toFixed(2));
    }


    render() {
        return (
            <div className="balance" >
                <div className="flex space-between">
                    <div >
                        <div className="balance-head">CURRENT BALANCE</div>
                        <p>BIT: ฿ {this.props.balance}</p>
                        <p>USD: $ {this.getValueOfUserBitcoins()}</p>
                    </div>

                    <div>
                    <div className="balance-head">CURRENT BTC USD:</div>
                    <p>$ {parseInt(this.props.rate)}</p>
                    </div>
                 </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        balance: state.userReducer.user.balance,
        rate: state.bitcoinReducer.rate
    };
};
export default connect(mapStateToProps)(Balance)