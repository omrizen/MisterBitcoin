
import React from 'react';
import moment from 'moment'
import  './Move.css'

const Move = (props) => {
    return (
        <div className="move">
            <div>To: {props.move.name}</div>
            <div>Amount: {props.move.amount}</div> 
            <div>At : {moment(props.move.at).format('MMMM Do YYYY, h:mm:ss a')} </div>    
        </div>
    )
}



// 
export default Move
