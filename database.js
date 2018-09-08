
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
uploader.addEventListener('click', function(e) {
  var content = editor.getValue()+
  '<style>'+editorcss.getValue()+'</style>'+
  '<script>'+editorjs.getValue()+'</script>';
  var file = new Blob([content],{type: "html;charset=utf-8"});
  console.log(file);
  var storageRef = firebase.storage().ref('html/1.html');
  storageRef.put(file).then(function(snapshot) {
  console.log('code uploaded!');
});
});
