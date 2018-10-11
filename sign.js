var config = {
  apiKey: "AIzaSyDqNbUnIczBny_GqMyX4QJWy6iSPgl6rnk",
  authDomain: "code-database.firebaseapp.com",
  databaseURL: "https://code-database.firebaseio.com",
  projectId: "code-database",
  storageBucket: "code-database.appspot.com",
  messagingSenderId: "1051636511409"
};
firebase.initializeApp(config);

var txtEmail = document.getElementById('txtEmail');
var txtPassword = document.getElementById('txtPassword');
var btnLogIn = document.getElementById('btnLogIn');
var btnSignUp = document.getElementById('btnSignUp');

btnLogIn.onclick = function () {
  var email = txtEmail.value;
  var pass = txtPassword.value;
  var auth = firebase.auth();
  var promise = auth.signInWithEmailAndPassword(email,pass);
  promise.catch(e => console.log(e.message));
};

btnSignUp.onclick = function () {
  var email = txtEmail.value;
  var pass = txtPassword.value;
  var auth = firebase.auth();
  var promise = auth.createUserWithEmailAndPassword(email,pass);
  promise.catch(e => console.log(e.message));
};

firebase.auth().onAuthStateChanged(user =>{
  if (user) {
    console.log(user);
    console.log(user.displayName);
  }
  else {
    console.log('not logged');
  }
});
