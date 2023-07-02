
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBO0o2N0DHMkS_HG44SlYA4rK1oa4W2mD8",
  authDomain: "petfinder-c54c2.firebaseapp.com",
  projectId: "petfinder-c54c2",
  storageBucket: "petfinder-c54c2.appspot.com",
  messagingSenderId: "92296516590",
  appId: "1:92296516590:web:a760df4e9321b0e34cb4ff",
  measurementId: "G-HV3QVJG673"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export {
  app, 
  db
}
