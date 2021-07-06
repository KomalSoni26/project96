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

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});

document.getElementById("msg").value = "";
}