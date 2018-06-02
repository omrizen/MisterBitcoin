import * as types from './types';
import _ from 'lodash';
const initState = {
    contacts: [
    ],
    user:{}
    
}

export function contactsReducer(state = initState, action) {
    let newState = _.cloneDeep(state);
    switch (action.type) {
        case types.UPLOAD_CONTACTS:
            newState.contacts = action.payload
            return newState;
           
        default:
            return state;
    }
}

export function userReducer(state = initState , action) {
    let newState = _.cloneDeep(state);
    switch (action.type) {
        case types.ADD_USER:
            newState.user = action.payload;
            return newState;
             
            
        default:
            return state;
    }
}
export function bitcoinReducer(state = initState , action) {
    let newState = _.cloneDeep(state);
    switch (action.type) {
        case types.LOAD_RATE:
            newState.rate = action.payload;
            return newState;
             
            
        default:
            return state;
    }
}





