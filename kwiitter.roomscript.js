//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBLLvoik98kRigB3WPvt80Max4aa3-U5qE",
    authDomain: "kwitter-d1f74.firebaseapp.com",
    databaseURL: "https://kwitter-d1f74-default-rtdb.firebaseio.com",
    projectId: "kwitter-d1f74",
    storageBucket: "kwitter-d1f74.appspot.com",
    messagingSenderId: "468248114027",
    appId: "1:468248114027:web:3afa2a195c79cfe5b8922e"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
