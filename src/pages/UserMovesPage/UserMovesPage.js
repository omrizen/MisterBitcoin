
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Move from '../../components/Move/Move'

class UserMovesPage extends Component {
    componentDidMount (){
    }
    render() {
        return (
            <div >
                <h1>Your Moves</h1>
                <ul>
                    {this.props.moves.map((move,i) => 
                         <li key={i}> <Move move={move}/> </li>
                    )}
                </ul>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        moves: state.userReducer.user.moves,
    };
};
// 
export default connect(mapStateToProps)(UserMovesPage)
