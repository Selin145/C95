// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi9XhAit5FTEqmELpkf-8hekgFvSD1n30",
  authDomain: "letschat-bd271.firebaseapp.com",
  databaseURL: "https://letschat-bd271-default-rtdb.firebaseio.com",
  projectId: "letschat-bd271",
  storageBucket: "letschat-bd271.appspot.com",
  messagingSenderId: "1030217130139",
  appId: "1:1030217130139:web:7054ebdf73455c2cf7263e",
  measurementId: "G-JWCYV9LFDT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -"+ Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectTORoomName(this.id)'>#"+Room_names+"</div><hr>";
      //End code
      });});}
getData();
function addRoom()
{
  room_name = document.getElementById("room_name").ariaValueMax;

  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location ="kwitter_page.html";
}
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("rrom_name", name);
  window.location = "kwitter_page.html";
}