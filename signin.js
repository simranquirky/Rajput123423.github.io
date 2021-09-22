// The core Firebase JS SDK is always required and must be listed first.

//TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries 




  // Your web app's Firebase configuration
 

var firebaseConfig = {
    apiKey: "AIzaSyC7ZsUC0M24tcOj8Gwd_SCcwWg0HFjK9SM",
    authDomain: "xyz123-7cc38.firebaseapp.com",
    projectId: "xyz123-7cc38",
    storageBucket: "xyz123-7cc38.appspot.com",
    messagingSenderId: "938048164226",
    appId: "1:938048164226:web:d1c9dbb66a26aa2485ff9b",
    measurementId: "G-2F8YJQE0B4"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


 const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    location.href = 'main.html';
    alert("Signed In Successfully");
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }
