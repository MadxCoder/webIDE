
var config = {
  apiKey: "AIzaSyDqNbUnIczBny_GqMyX4QJWy6iSPgl6rnk",
  authDomain: "code-database.firebaseapp.com",
  databaseURL: "https://code-database.firebaseio.com",
  projectId: "code-database",
  storageBucket: "code-database.appspot.com",
  messagingSenderId: "1051636511409"
};
firebase.initializeApp(config);


var uploader = document.getElementById('uploader');
var filename = document.getElementById('filename');
uploader.addEventListener('click', function(e) {
  var name = filename.value;
  if (name !== "") {
    /*var content = editor.getValue()+
    '<style>'+editorcss.getValue()+'</style>'+
    '<script>'+editorjs.getValue()+'</script>';
    var file = new Blob([content],{type: "text"});
    console.log(file);
    var storageRef = firebase.storage().ref('html/'+name);
    storageRef.put(file).then(function(snapshot) {
      console.log('code uploaded!');
    snapshot.ref.getDownloadURL().then(function(url) {
    console.log('File available at', url);
    var postData = {
      //name: name,
      //url: url,
      content: content,

    };*/
    var date = new Date();
    console.log(date);
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var session = "AM";
    if (hour > 12){
      hour = hour - 12;
      session = "PM";
    }
    minutes = (minutes<10) ? "0"+minutes:minutes;
    var newDate = day +'/'+ month +'/'+ year +'  '+ hour +':'+ minutes+" "+session;
    console.log(newDate);

    // Get a key for a new Post.
    var newPostKey = firebase.database().ref().child('posts').child(name).set({
      //name: name,
      //url: url,
      html: editor.getValue(),
      css: editorcss.getValue(),
      js: editorjs.getValue(),
      date: newDate
});

    // Write the new post's data simultaneously in the posts list and the user's post list.
    /*var updates = {};
    updates['/posts/' + newPostKey] = postData;
    return firebase.database().ref().update(updates);*/
//  });
}
//});

  else {
    filename.classList.add("inputError");
    alert('please insert a file name');
  }
});
window.onload = function() {
var filepick = document.getElementById('filepick');
var database = firebase.database().ref().child('posts');
var filepicker = document.getElementById('filepicker');
var txt = document.getElementById('txt');
var modal = document.getElementById('modal');
database.on("child_added", snap=> {
  var newPost = snap.val().name;
  var div = document.createElement('div');
  filepicker.appendChild(div);
  var filepick = document.getElementById('filepick');
  div.innerHTML = 'File Name: '+snap.key+'<br>'+'Uploaded: '+snap.val().date;
  console.log(snap.val().css);

  //snap.key
  div.onclick = function () {
    var key = snap.key;
    console.log(key);
    var ob = firebase.database().ref().child('posts/'+key);
    console.log(ob);
    //console.log(key);
  ob.on("child_added", function(snapshot) {
    console.log(snap.val().html);
    editor.setValue(snap.val().html,1);
    editorcss.setValue(snap.val().css,1);
    editorjs.setValue(snap.val().js,1);
  });
  modal.style.display = "none";
    //var code = key.snap.val().content;
      //editor.setValue(code);
  };
});
    initApp();
};

var sign = document.getElementById('sign');
function initApp() {
    // Listening for auth state changes.
    // [START authstatelistener]
    firebase.auth().onAuthStateChanged(function(user) {
      // [START_EXCLUDE silent]
      // [END_EXCLUDE]
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // [START_EXCLUDE]
        // [END_EXCLUDE]
        console.log("here");
        sign.innerHTML = '<a>'+displayName+'</a>';
      }
       else {
         sign.onclick = function () {
         var provider = new firebase.auth.GoogleAuthProvider();
         firebase.auth().signInWithRedirect(provider);
       };

      }

    });

  }
