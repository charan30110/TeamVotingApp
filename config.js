import firebase from 'firebase';

  var firebaseConfig = {
    //paste your SDK here
apiKey: "AIzaSyBvKb-cKxnHYpwutVt2aSvzmSLcQXVDAxA",
  authDomain: "project-c58-d796f.firebaseapp.com",
  databaseURL: "https://project-c58-d796f-default-rtdb.firebaseio.com",
  projectId: "project-c58-d796f",
  storageBucket: "project-c58-d796f.appspot.com",
  messagingSenderId: "1056816644176",
  appId: "1:1056816644176:web:73f9da0d7cf85037385155",
  measurementId: "G-DK434GKWC7"


    
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();