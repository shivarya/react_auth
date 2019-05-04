import * as firebase from 'firebase';
import firebaseConfig from './firebase_config';

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
// firebaseDB.ref().set({  //whole database
//     name:'Ashish',
//     ahe:20,
//     car : {
//         brand : 'Ford',
//         type: 'Hatch Back'
//     },
//     opt : [
//         1,2
//     ]
// });

// firebaseDB.ref('name').set('KKKK');

// firebaseDB.ref('car/brand').set('Tata');

// firebaseDB.ref('skills').set([
//     'php','mysql'
// ]);

//ADD DATA
// firebaseDB.ref('eyes').set('brown')
// .then(() => {
//     console.log("saved");        
// }).catch((err) => {
//     console.error(err);        
// });


//delete data
// firebaseDB.ref('eyes').remove()
// .then(() => {
//     console.log("deleted");        
// }).catch((err) => {
//     console.error(err);        
// });

// //update data
// firebaseDB.ref().update({ //can update multiple collection
//     name:'Michal',
//     'user/lastname':'tripathi'
// })
// .then(() => {
//     console.log("updated");        
// }).catch((err) => {
//     console.error(err);        
// });

//get data
firebaseDB.ref('car/brand').once('value') //will only run once
.then((res) => {
    let data = res.val();
    console.log(data);        
}).catch((err) => {
    console.error(err);        
});

//listen if value changed
firebaseDB.ref('car').on('value', (res) => {
    let data = res.val();
    console.log(data);       
});

//firebaseDB.ref().off(); //stop all listners


//listen if child removed
firebaseDB.ref().on('child_removed', (res) => {
    console.log(res.key,res.val());       
});

//listen if child updated
firebaseDB.ref().on('child_changed', (res) => {
    console.log(res.key,res.val());       
});

//listen if child added
firebaseDB.ref().on('child_added', (res) => {
    console.log(res.key,res.val());       
});
