 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAI3w9CsZZawCOIBe0yhGrByLBnwDCFtqg",
    authDomain: "project93-422a4.firebaseapp.com",
    databaseURL: "https://project93-422a4-default-rtdb.firebaseio.com",
    projectId: "project93-422a4",
    storageBucket: "project93-422a4.appspot.com",
    messagingSenderId: "270740419678",
    appId: "1:270740419678:web:6869024a64cd7ec94470cf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function addUser() {

    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
      window.location = "kwitter_room.html";
  }
  