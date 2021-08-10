import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyDSBSnuCPway7FbXwpMi95hpiwkRCCDP6E",
    authDomain: "desenvolvimento-b28ea.firebaseapp.com",
    projectId: "desenvolvimento-b28ea",
    storageBucket: "desenvolvimento-b28ea.appspot.com",
    messagingSenderId: "34466355116",
    appId: "1:34466355116:web:491bcd4c29972446b94c09"
  };

  if(!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
  }

  export default firebase;