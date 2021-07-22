import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB1Totypg55CKcKuAfXR7miKHCyHXQCuYs",
    authDomain: "coisas-dev.firebaseapp.com",
    databaseURL: "https://coisas-dev.firebaseio.com",
    projectId: "coisas-dev",
    storageBucket: "coisas-dev.appspot.com",
    messagingSenderId: "807590892736",
    appId: "1:807590892736:web:1bb95343db5e99d7b7c925"
};
  
firebase.initializeApp(firebaseConfig);


export { firebase }
export const db = firebase.firestore()