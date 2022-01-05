import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDDBvNzaCsMwnbM9ZCN_BuOQn-LCOIYCAs",
    authDomain: "olx-demo-53bb2.firebaseapp.com",
    projectId: "olx-demo-53bb2",
    storageBucket: "olx-demo-53bb2.appspot.com",
    messagingSenderId: "27412721877",
    appId: "1:27412721877:web:93d103dc050fb076c7b25c",
    measurementId: "G-VXP2VMJE34"
  };

export  default firebase.initializeApp(firebaseConfig)