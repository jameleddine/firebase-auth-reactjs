const firebase = require('firebase')

const firebaseConfig = {
    apiKey: "AIzaSyAuXv5h0nIViOEKQ-89zgA5QvElcezm-XU",
    authDomain: "x-cite-28d9b.firebaseapp.com",
    databaseURL: "https://x-cite-28d9b.firebaseio.com",
    projectId: "x-cite-28d9b",
    storageBucket: "",
    messagingSenderId: "958366267663",
    appId: "1:958366267663:web:d64f9a6baa65af5f"
};
firebase.initializeApp(firebaseConfig);
const providers = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

module.exports = {
    firebase,
    providers,
    auth
  }

