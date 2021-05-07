//This is where Firbase config will go
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAxD33XUqoJvrGgCAmRSs4fzrbz32128LI",
    authDomain: "firebassproject1.firebaseapp.com",
    databaseURL: "https://firebassproject1-default-rtdb.firebaseio.com",
    projectId: "firebassproject1",
    storageBucket: "firebassproject1.appspot.com",
    messagingSenderId: "893514024388",
    appId: "1:893514024388:web:ba45dd3d3befca3328d091"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//All our variable declarations
let database = firebase.database();
let name = document.querySelector("#username");
let input = document.querySelector("#message");


//Code to PUSH data to the database
input.addEventListener('keypress', function(event) {
    if(event.key === "Enter") {
     database.ref("messages").push({
       name: name.value, 
       message: input.value
     })
   input.value="";
   }
 })

//Code to RETRIEVE data from the database
database.ref("messages").on('child_added', function(message) {
    let messages = document.querySelector("#messages");
    let name = message.val().name;
    let value = message.val().message;
    let div = document.createElement("div");
    let span = document.createElement("span");
    span.innerHTML = "UserName" + name;
    let p = document.createElement("p");
    p.innerHTML = value; 
    div.appendChild(span);
    div.appendChild(p);
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight; 
  })
