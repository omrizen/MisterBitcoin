import * as types from './types';
import ContactService from '../services/ContactService.js'
import UserService from '../services/UserService.js'
import BitcoinService from '../services/BitcoinService.js'


export function addUser(user) {
    UserService.saveUser(user)
    return {
        type: types.ADD_USER,
        payload: user,
    };
}

export function uploadUser() {
    let user = UserService.getUser()
    console.log ('user', user);
    return {
        type: types.ADD_USER,
        payload: user,
    };
}

export function addMove(move) {
    let user = UserService.addMove(move)
    return {
        type: types.ADD_USER,
        payload: user,
    };
}

export function loadRate(rate) {
    return {
        type: types.LOAD_RATE,
        payload: rate,
    };
}


export function uploadContacts(contacts) {
    return {
        type: types.UPLOAD_CONTACTS,
        payload: contacts,
    };
}

export function loadContacts(filter) {

    console.log ('filterz', filter);
    // We return a function instead of an action object
    return (dispatch) => {
        ContactService.getContacts(filter)
        .then (contacts=>{
            console.log ('contactszz' , contacts);
            dispatch(uploadContacts(contacts));
        })
    };
}

export function fetchRate() {

    
    // We return a function instead of an action object
    return (dispatch) => {
        BitcoinService.getRate()
        .then (rate=>{
            console.log ('rate' , rate);
            dispatch(loadRate(rate));
        })
    };
}


        
