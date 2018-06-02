

function getEmptyUser() {
    return { name: '', balance: 100, moves: [] }
}

function saveUser(user) {
    localStorage.setItem('loggedinUser', JSON.stringify(user))
}

function getUser() {
    return JSON.parse(localStorage.getItem('loggedinUser'))

}
function addMove (move){
    move.at = Date.now();
    let user = getUser();
    user.moves.push (move);

    user.balance = user.balance - move.amount;
    localStorage.setItem('loggedinUser' ,  JSON.stringify(user));
    return user;
}
function getMoves(){
    // let user = 
}


export default {
    getEmptyUser,
    saveUser,
    getUser,
    addMove,
    getMoves

    
}

