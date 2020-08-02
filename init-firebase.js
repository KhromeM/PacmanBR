  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCZfiwX1XQZ1uo8WPi2c2qwLgkEuiqaFbI",
    authDomain: "pacmanbr-3184b.firebaseapp.com",
    databaseURL: "https://pacmanbr-3184b.firebaseio.com",
    projectId: "pacmanbr-3184b",
    storageBucket: "pacmanbr-3184b.appspot.com",
    messagingSenderId: "437854439395",
    appId: "1:437854439395:web:19ef41fd07dcbaaf22c2d6",
    measurementId: "G-YVNWKLJ2K9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

let firestore = firebase.firestore()
let docRef = firestore.doc("game/players")


// This is purely to set up the database for when we have to change to another one when the read/write limits are reached
//-------------------------------------------------------------------------------------------------------------------------------
/*
let player1 = {'name': '', 'position': [100,100], 'status': 1 , 'score': 0, 'taken': 0}
let player2 = {'name': '', 'position': [400,400], 'status': 1 , 'score': 0, 'taken': 0}

docRef.set({ 
  player1 : player1,
  player2 : player2
})
.then(console.log('value set!'))
.catch(function (error) {console.log(error)}) */

//--------------------------------------------------------------------------------------------------------------------------------












/*
docRef.set({
  value : 33
})
.then(console.log('value set!'))
.catch(function (error) {console.log(error)}) 

docRef.get()
  .then(function (doc) {
  if (doc && doc.exists) {
    let val = doc.data();
    console.log(val)
  }
})  

getUpdates = function() {
  docRef.onSnapshot(function (doc) {
    if (doc && doc.exists) {
    let val = doc.data();
    console.log(val) }
  })
}

function setVal() {
  docRef.set({
  value : Math.random()
})
.then(console.log('value set!'))
.catch(function (error) {console.log(error)}) 
} */

