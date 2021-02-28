import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAImieZRoAfw_Lp7gRriaYuJ6KGR-kIF4g",
    authDomain: "slack-chat-958b2.firebaseapp.com",
    databaseURL: "https://slack-chat-958b2.firebaseio.com",
    projectId: "slack-chat-958b2",
    storageBucket: "slack-chat-958b2.appspot.com",
    messagingSenderId: "661297260890",
    appId: "1:661297260890:web:9b830fdfb9267cbf312b63",
    measurementId: "G-3J8ED2561Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;