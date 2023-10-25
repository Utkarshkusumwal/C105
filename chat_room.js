// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
    apiKey: "AIzaSyAg90ZhQ0E7sV8Wre2238Rr4GLIWuXixnM",
    authDomain: "let-s-chat-d11be.firebaseapp.com",
    databaseURL: "https://let-s-chat-d11be-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-d11be",
    storageBucket: "let-s-chat-d11be.appspot.com",
    messagingSenderId: "841542361952",
    appId: "1:841542361952:web:a954453f4f387146f87405"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "chat_page.html";
}

function getData() {
    firebase.database().ref("/").on('value',
          function (snapshot) {
                document.getElementById("output").innerHTML = "";
                snapshot.forEach(function (childSnapshot) {
                      childKey = childSnapshot.key;
                      Room_names = childKey;
                      // start code
                      console.log("Room name - ", Room_names);
                      row = "<div class = 'room_name' id=" + Room_names + "onclick = 'redirctingToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                      document.getElementById("output").innerHTML += row;
                      // End code
                });
          });
}
getData();

function redirctingToRoomName() {
    console.log(Room_names);
    localStorage.setItem("room_name", Room_names);
    window.location = "chat_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
