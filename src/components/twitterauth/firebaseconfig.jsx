import firebase from "firebase/app";
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCF3ZP41EAYd8z9EOu22uX4TM_2e7fn4q8",
  authDomain: "newsapp-ec414.firebaseapp.com",
  projectId: "newsapp-ec414",
  storageBucket: "newsapp-ec414.appspot.com",
  messagingSenderId: "521261544263",
  appId: "1:521261544263:web:e7d8999b9f329b05cd5262",
  measurementId: "G-N5JMYEKRJ7"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.TwitterAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithTwitter = () => auth.signInWithPopup(provider);

export default firebase