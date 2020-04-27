import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDRWQ7USM4N3Nm-pknVuhDJkhqIXNcj5J0",
    authDomain: "expensify-app-ab9c8.firebaseapp.com",
    databaseURL: "https://expensify-app-ab9c8.firebaseio.com",
    projectId: "expensify-app-ab9c8",
    storageBucket: "expensify-app-ab9c8.appspot.com",
    messagingSenderId: "1071690224978",
    appId: "1:1071690224978:web:c379211a5e37db24d3168b"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database=firebase.database();

database.ref().set({name:'iñaki', age:49, location: {city:'Vitoria', country:'Spain'}}).then((data)=> {
    console.log('data saved!', data);
}).catch((error)=> {
    console.group('error:', error)
});
    
// database.ref().once('value')
//     .then((snapshot)=> {
//         console.log('data: ', snapshot.val());
//     }).catch((error)=> {
//         console.group('error:', error)
//     });
const onValueChange = database.ref().on('value',
    (snapshot)=> {
    console.log('***cambiando',snapshot.val())},
    (e)=> {
        console.log('Error with data',e)}
);

setTimeout(()=>{
    database.ref('age').set(30);
}, 3000);
setTimeout(()=>{
    console.log("desubscribiendo")
    database.ref().off('value',onValueChange);
}, 7000);
setTimeout(()=>{
    database.ref('age').set(40);
}, 10000);
// database.ref('users/location/citys').set('N.Y.').then((data)=> {
//     console.log('sate saved!', data);
// }).catch((error)=> {
//     console.group('error:', error)
// });