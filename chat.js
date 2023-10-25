

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



function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "hi user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}



