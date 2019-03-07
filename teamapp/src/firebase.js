import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAE6w4E07f0Zy18rwlssPauyeqPcrD7How",
    authDomain: "teamapp-911f7.firebaseapp.com",
    databaseURL: "https://teamapp-911f7.firebaseio.com",
    projectId: "teamapp-911f7",
    storageBucket: "teamapp-911f7.appspot.com",
    messagingSenderId: "323423173578"
  };
  firebase.initializeApp(config);

  export const provider = new firebase.auth.EmailAuthProvider();
  export const auth = firebase.auth();
  export default firebase;