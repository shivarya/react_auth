import * as firebase from 'firebase';
import firebaseConfig from './firebase_config';

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
//firebaseDB.ref().set("");


// //pushing data to db
firebaseDB.ref('users').push({ //it will create id (key)
    name:'Ashu',
    last:'Tri'
})

firebaseDB.ref('users').push({ //it will create id (key)
    name:'Ashish',
    last:'Tripathi'
})

//now to get value
firebaseDB.ref('users/-Le32r7WqzNkJozTxlEd').once("value")
.then((res) => {
    console.log(res.val());    
})

//to get all users in form of array
firebaseDB.ref('users').once('value')
.then(res => {
    const users = [];
    res.forEach((childRes) => {
        users.push({
            id:childRes.key,
            ...childRes.val()
        })  
    })
    console.log(users);    
})