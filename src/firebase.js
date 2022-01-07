import firebase from "firebase/compat/app";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDGNgSveB25X60VsL8Kfaq0XARAdw9WY4c",
  authDomain: "basic-todo-b735c.firebaseapp.com",
  projectId: "basic-todo-b735c",
  storageBucket: "basic-todo-b735c.appspot.com",
  messagingSenderId: "1059343595343",
  appId: "1:1059343595343:web:dd59ad4d30269232ec773a",
  measurementId: "G-THZGTE7VS9",
});

const db = firebaseApp.firestore();
export { db };
