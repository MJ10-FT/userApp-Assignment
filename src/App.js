import './App.css';
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Base from './components/Base/base';

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
      apiKey: "AIzaSyBl-tagwyhKzA2-UfnP_yx1P-zwMfWBMr0",
      authDomain: "signinauth-8731f.firebaseapp.com",
      projectId: "signinauth-8731f",
      storageBucket: "signinauth-8731f.appspot.com",
      messagingSenderId: "604079814141",
      appId: "1:604079814141:web:0c4d5688ec5fe2a705d594",
      measurementId: "G-NZEQJLPYJT"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // firebase.analytics();
    // firebase.authDomain();

function App() {

  return (
    <Router>
        <Switch>

        <Route path="/">

            <Base />
        </Route>
          </Switch>
    </Router>
  );
}

export default App;
