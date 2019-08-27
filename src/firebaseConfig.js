const firebase = require('firebase')

const firebaseConfig = {
    apiKey: "****",
    authDomain: "****",
    databaseURL: "***",
    projectId: "***",
    storageBucket: "",
    messagingSenderId: "****",
    appId: "****"
};
firebase.initializeApp(firebaseConfig);
const providers = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

module.exports = {
    firebase,
    providers,
    auth
  }

