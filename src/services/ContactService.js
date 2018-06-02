import uniqid from 'uniqid'

let contacts = [
  {
    "_id": "5a56640269f443a5d64b32ca",
    "picture":  "https://ia.media-imdb.com/images/M/MV5BMTk4MTAwMjYzNV5BMl5BanBnXkFtZTcwNjIxNTU1OA@@._V1._CR286,2,351,422_.jpg",
    "name": "Ochoa Hyde",
    "email": "ochoahyde@renovize.com",
    "phone": "+1 (968) 593-3824"
  },
  {
    "_id": "5a5664025f6ae9aa24a99fde",
    "picture":  "https://ia.media-imdb.com/images/M/MV5BMTk4MTAwMjYzNV5BMl5BanBnXkFtZTcwNjIxNTU1OA@@._V1._CR286,2,351,422_.jpg",
    "name": "Hallie Mclean",
    "email": "halliemclean@renovize.com",
    "phone": "+1 (948) 464-2888"
  },
  {
    "_id": "5a56640252d6acddd183d319",
    "picture":  "https://ia.media-imdb.com/images/M/MV5BMTk4MTAwMjYzNV5BMl5BanBnXkFtZTcwNjIxNTU1OA@@._V1._CR286,2,351,422_.jpg",
    "name": "Parsons Norris",
    "email": "parsonsnorris@renovize.com",
    "phone": "+1 (958) 502-3495"
  },
  {
    "_id": "5a566402ed1cf349f0b47b4d",
    "picture":  "https://ia.media-imdb.com/images/M/MV5BMTk4MTAwMjYzNV5BMl5BanBnXkFtZTcwNjIxNTU1OA@@._V1._CR286,2,351,422_.jpg",
    "name": "Rachel Lowe",
    "email": "rachellowe@renovize.com",
    "phone": "+1 (911) 475-2312"
  },
  {
    "_id": "5a566402abce24c6bfe4699d",
    "picture":  "https://ia.media-imdb.com/images/M/MV5BMTk4MTAwMjYzNV5BMl5BanBnXkFtZTcwNjIxNTU1OA@@._V1._CR286,2,351,422_.jpg",
    "name": "Dominique Soto",
    "email": "dominiquesoto@renovize.com",
    "phone": "+1 (807) 551-3258"
  },
  {
    "_id": "5a566402a6499c1d4da9220a",
    "picture":  "https://ia.media-imdb.com/images/M/MV5BMTk4MTAwMjYzNV5BMl5BanBnXkFtZTcwNjIxNTU1OA@@._V1._CR286,2,351,422_.jpg",
    "name": "Shana Pope",
    "email": "shanapope@renovize.com",
    "phone": "+1 (970) 527-3082"
  },
  {
    "_id": "5a566402f90ae30e97f990db",
    "picture":  "https://ia.media-imdb.com/images/M/MV5BMTk4MTAwMjYzNV5BMl5BanBnXkFtZTcwNjIxNTU1OA@@._V1._CR286,2,351,422_.jpg",
    "name": "Faulkner Flores",
    "email": "faulknerflores@renovize.com",
    "phone": "+1 (952) 501-2678"
  },
  {
    "_id": "5a5664027bae84ef280ffbdf",
    "picture":  "https://ia.media-imdb.com/images/M/MV5BMTk4MTAwMjYzNV5BMl5BanBnXkFtZTcwNjIxNTU1OA@@._V1._CR286,2,351,422_.jpg",
    "name": "Holder Bean",
    "email": "holderbean@renovize.com",
    "phone": "+1 (989) 503-2663"
  },
  {
    "_id": "5a566402e3b846c5f6aec652",
    "picture":  "https://ia.media-imdb.com/images/M/MV5BMTk4MTAwMjYzNV5BMl5BanBnXkFtZTcwNjIxNTU1OA@@._V1._CR286,2,351,422_.jpg",
    "name": "Rosanne Shelton",
    "email": "rosanneshelton@renovize.com",
    "phone": "+1 (968) 454-3851"
  },
  {
    "_id": "5a56640272c7dcdf59c3d411",
    "picture":  "https://ia.media-imdb.com/images/M/MV5BMTk4MTAwMjYzNV5BMl5BanBnXkFtZTcwNjIxNTU1OA@@._V1._CR286,2,351,422_.jpg",
    "name": "Pamela Nolan",
    "email": "pamelanolan@renovize.com",
    "phone": "+1 (986) 545-2166"
  },
  {
    "_id": "5a5664029a8dd82a6178b15f",
    "picture":  "https://ia.media-imdb.com/images/M/MV5BMTk4MTAwMjYzNV5BMl5BanBnXkFtZTcwNjIxNTU1OA@@._V1._CR286,2,351,422_.jpg",
    "name": "Roy Cantu",
    "email": "roycantu@renovize.com",
    "phone": "+1 (929) 571-2295"
  },
  {
    "_id": "5a5664028c096d08eeb13a8a",
    "picture":  "https://ia.media-imdb.com/images/M/MV5BMTk4MTAwMjYzNV5BMl5BanBnXkFtZTcwNjIxNTU1OA@@._V1._CR286,2,351,422_.jpg",
    "name": "Ollie Christian",
    "email": "olliechristian@renovize.com",
    "phone": "+1 (977) 419-3550"
  },
  {
    "_id": "5a5664026c53582bb9ebe9d1",
    "picture":  "https://ia.media-imdb.com/images/M/MV5BMTk4MTAwMjYzNV5BMl5BanBnXkFtZTcwNjIxNTU1OA@@._V1._CR286,2,351,422_.jpg",
    "name": "Nguyen Walls",
    "email": "nguyenwalls@renovize.com",
    "phone": "+1 (963) 471-3181"
  },
  {
    "_id": "5a56640298ab77236845b82b",
    "picture":  "https://ia.media-imdb.com/images/M/MV5BMTk4MTAwMjYzNV5BMl5BanBnXkFtZTcwNjIxNTU1OA@@._V1._CR286,2,351,422_.jpg",
    "name": "Glenna Santana",
    "email": "glennasantana@renovize.com",
    "phone": "+1 (860) 467-2376"
  },
  {
    "_id": "5a56640208fba3e8ecb97305",
    "picture":  "https://ia.media-imdb.com/images/M/MV5BMTk4MTAwMjYzNV5BMl5BanBnXkFtZTcwNjIxNTU1OA@@._V1._CR286,2,351,422_.jpg",
    "name": "Malone Clark",
    "email": "maloneclark@renovize.com",
    "phone": "+1 (818) 565-2557"
  },
  {
    "_id": "5a566402abb3146207bc4ec5",
    "picture":  "https://ia.media-imdb.com/images/M/MV5BMTk4MTAwMjYzNV5BMl5BanBnXkFtZTcwNjIxNTU1OA@@._V1._CR286,2,351,422_.jpg",
    "name": "Floyd Rutledge",
    "email": "floydrutledge@renovize.com",
    "phone": "+1 (807) 597-3629"
  },
  {
    "_id": "5a56640298500fead8cb1ee5",
    "picture":  "https://ia.media-imdb.com/images/M/MV5BMTk4MTAwMjYzNV5BMl5BanBnXkFtZTcwNjIxNTU1OA@@._V1._CR286,2,351,422_.jpg",
    "name": "Grace James",
    "email": "gracejames@renovize.com",
    "phone": "+1 (959) 525-2529"
  },
  {
    "_id": "5a56640243427b8f8445231e",
    "picture":  "https://ia.media-imdb.com/images/M/MV5BMTk4MTAwMjYzNV5BMl5BanBnXkFtZTcwNjIxNTU1OA@@._V1._CR286,2,351,422_.jpg",
    "name": "Tanner Gates",
    "email": "tannergates@renovize.com",
    "phone": "+1 (978) 591-2291"
  },
  {
    "_id": "5a5664025c3abdad6f5e098c",
    "picture":  "https://ia.media-imdb.com/images/M/MV5BMTk4MTAwMjYzNV5BMl5BanBnXkFtZTcwNjIxNTU1OA@@._V1._CR286,2,351,422_.jpg",
    "name": "Lilly Conner",
    "email": "lillyconner@renovize.com",
    "phone": "+1 (842) 587-3812"
  }
];

function sort(arr) {
  return arr.sort( (a, b) => {
    if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
      return -1;
    }
    if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
      return 1;
    }

    return 0;
  })
}

function getContacts (filterBy = null) {
  return new Promise((resolve, reject) => { 
    var contactsToReturn = contacts;
    if (filterBy) {
      const term = filterBy.term
      contactsToReturn = contacts.filter( contact => {
        
        return contact.name.toLocaleLowerCase().includes(term) ||
               contact.phone.toLocaleLowerCase().includes(term) ||
               contact.email.toLocaleLowerCase().includes(term)
      })
    }
    resolve(sort(contactsToReturn))
  })
}

function getContactById (id) {
    return new Promise((resolve, reject) => {
      const contact = contacts.find( contact => contact._id === id)
      contact ? resolve(contact) : reject(`Contact id ${id} not found!`)
    })
}

function deleteContact(id) {
  return new Promise((resolve, reject) => { 
    const index = contacts.findIndex( contact => contact._id === id)
    if (index !== -1) {
      contacts.splice(index, 1)
    }

    resolve(contacts)
  })
}

function _updateContact(contact) {
  return new Promise((resolve, reject) => { 
    const index = contacts.findIndex( c => contact._id === c._id)
    if (index !== -1) {
      contacts[index] = contact
    }
    
    resolve(contacts)
  })
}

function _addContact(contact) {
  return new Promise((resolve, reject) => { 
    contact._id = uniqid()
    contact.picture = '/img/img_avatar.png'      
    contacts.push(contact)
    resolve(contacts)
  })
}

function saveContact(contact) {
  console.log ('moshe');
  return contact._id ? _updateContact(contact) : _addContact(contact)
}

function getEmptyContact() {
  return {
    picture: '',
    name: '',
    email: '',
    phone: ''
  }
}

export default {
  getContacts,
  getContactById,
  deleteContact,
  saveContact,
  getEmptyContact
}