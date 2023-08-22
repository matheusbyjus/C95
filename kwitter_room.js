
const firebaseConfig = {
  apiKey: "AIzaSyCYyjW-3xrgUlZ30Z8_O6zWMc441eHeDIU",
  authDomain: "kwitter-dd512.firebaseapp.com",
  databaseURL:"https://kwitter-dd512-default-rtdb.firebaseio.com/",
  projectId: "kwitter-dd512",
  storageBucket: "kwitter-dd512.appspot.com",
  messagingSenderId: "785787788032",
  appId: "1:785787788032:web:4e48bfe7f67ed4650131e5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADICIONE SEUS LINKS FIREBASE

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem-vindo(a) " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() { 
   firebase.database().ref("/").on('value', function(snapshot) { 
    document.getElementById("output").innerHTML = ""; 
    snapshot.forEach(function(childSnapshot) { 
      childKey  = childSnapshot.key;
       room_names = childKey;
       console.log("Nome da Sala - " + room_names);
      row = "<div class='room_name' id="+room_names+" onclick='redirectToRoomName(this.id)' >#"+ room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
