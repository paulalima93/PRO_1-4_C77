import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDyusKFf6iTgLYhgrwIel_BcsXub1QaUKE",
    authDomain: "biblioteca-eletronica-3dcf5.firebaseapp.com",
    projectId: "biblioteca-eletronica-3dcf5",
    storageBucket: "biblioteca-eletronica-3dcf5.appspot.com",
    messagingSenderId: "247534865440",
    appId: "1:247534865440:web:dc8a15152a62918df24045"
  };

firebase.initializeApp(firebaseConfig);
export default firebase.firestore()