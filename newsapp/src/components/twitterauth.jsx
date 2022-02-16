import React, { useEffect, useState } from "react";
import firebase, {signInWithTwitter} from './twitterauth/firebaseconfig'

export default function TwitterUserAuth() {
  const [user, setUser] = useState("");

   const SignInWithTwitter = () => {
      console.log("button clicked");
      const provider = new TwitterAuthProvider();
      signInWithPopup(authentication, provider)
        .then((res) => {
          console.log(res);
        
        })
        .catch((err) => {
          console.log(err);
        });
    };

    useEffect(() => {

    firebase.auth().onAuthStateChanged(user1 => {
      setUser(user1);
      localStorage.setItem("twitter", user)
    })

  }, [])
  return <button className="btn btn-dark bi bi-twitter" onClick={SignInWithTwitter} ></button>;
}
