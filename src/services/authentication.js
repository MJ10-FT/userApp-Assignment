// These samples are intended for Web so this import would normally be
// done in HTML however using modules here is more convenient for
// ensuring sample correctness offline.
import firebase from "firebase/app";
import "firebase/auth";

function signInWithEmailPassword(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password)
    // .then((userCredential) => {
    //   // Signed in
    //   var user = userCredential.user;
    //   // ...
    // })
    // .catch((error) => {
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   console.log(errorMessage, 'the error');
    // });
  // [END auth_signin_password]
}

function signUpWithEmailPassword(email, password) {
  // var email = "mj@example.com";
  // var password = "hunter2";
  // [START auth_signup_password]
  return firebase.auth().createUserWithEmailAndPassword(email, password)
    // .then((userCredential) => {
    //   // Signed in 
    //   var user = userCredential.user;
    //   console.log(user, ' This User');
   
    //   // ...
    // })
    // .catch((error) => {
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   console.log(error, ' authentication error');
  
    //   // ..
    // });
  // [END auth_signup_password]
}

export {signUpWithEmailPassword, signInWithEmailPassword}