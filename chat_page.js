

const firebaseConfig = {
    apiKey: "AIzaSyBc4PolU9NSqBxeUx8r56PZ0AaxrFw2UCk",
    authDomain: "kwitter-662c2.firebaseapp.com",
    databaseURL: "https://kwitter-662c2-default-rtdb.firebaseio.com",
    projectId: "kwitter-662c2",
    storageBucket: "kwitter-662c2.appspot.com",
    messagingSenderId: "557769083283",
    appId: "1:557769083283:web:3ad1a7595530a5396b8066"
};
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
//   document.getElementById("room_name").innerHTML = "Dear " + user_name + ", Welcome to " + room_name;
function send() 
{ 
    msg = document.getElementById("msg").value; 
    console.log(msg); 
    firebase.database().ref(room_name).push({ 
    name: user_name, 
    message: msg, 
    like: 0 
}); 
document.getElementById("msg").value = ""; 
                                                                          
}


function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                firebase_message_id = childKey; message_data = childData;
                firebase_message_id = childKey;
                message_data = childData;

                console.log(firebase_message_id);
                console.log(message_data);
                name = message_data['name'];
                message = message_data['message'];
                like = message_data['like'];
                name_with_tag = "<h4>" + name + "<img class = 'user_tick' src = 'tick.png'></h4>";
                message_with_tag = "<h4  class = 'message_h4'>" + message + "</h4>";
                // like_button = "<button class = 'btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
                like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
                span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>Like:" + like + "</span></button><hr>";

                row = name_with_tag + message_with_tag + like_button + span_with_tag;
                document.getElementById("output").innerHTML += row;
            }
        });
    });
}

getData();

function updateLike(message_id) {
    console.log("clicked on like button -" + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = parseInt(likes) + 1;
    console.log(likes);

    firebase.database().ref(room_name).child(message_id).update({
        like : updated_likes
    });
}
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
} 

