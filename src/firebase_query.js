import * as firebase from 'firebase';
import firebaseConfig from './firebase_config';

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();

//to get all users in form of array
firebaseDB.ref('users').orderByChild('name').once('value') //order by key
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

// limitToFirst(n) //limit first n result
// limitToLast(n) //limit last n result
//equalTo will find result if equal