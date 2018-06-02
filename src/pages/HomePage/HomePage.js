import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import BitcoinService from '../../services/BitcoinService'
import { fetchRate } from '../../store/actions';

import Balance from '../../components/Balance/Balance'

import './HomePage.css'




class HomePage extends Component {
    constructor() {
        super();
    }


    componentWillMount() {
        this.props.fetchRate();

    }

    render() {

        if (this.props.user) {
            return (
               
                <div className="homepage container">
                    <div className="headline">Hi ,  <span>{this.props.user.name}</span></div>
                    <Balance className="balance"/>                   
                </div>
            )
        }

        else return (<div>zozo</div>)

    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
        rate: state.bitcoinReducer.rate
    };
};
const mapActionToProps = (dispatch) => {
    return bindActionCreators({
        fetchRate
    }, dispatch)
};




// export default TodoApp;
export default connect(mapStateToProps,mapActionToProps,)(HomePage);


