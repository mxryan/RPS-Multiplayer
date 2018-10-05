

// TODO:
// set up authentication
// display users name when logged in
// set up chat
// matchmaking?
// game


const config = {
  apiKey: "AIzaSyBHEnOjnYiv106sjjSehe-o_Svh-1DyS8E",
  authDomain: "classapp-2a7b3.firebaseapp.com",
  databaseURL: "https://classapp-2a7b3.firebaseio.com",
  projectId: "classapp-2a7b3",
  storageBucket: "classapp-2a7b3.appspot.com",
  messagingSenderId: "751336947333"
};
firebase.initializeApp(config);
const db = firebase.database();
const root = "/rps_multiplayer";

//AUTH
const provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithRedirect(provider);

