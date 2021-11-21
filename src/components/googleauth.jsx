import React, { useState, useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import axios from "axios";

export default function GoogleAuth(props) {
  const [loading, setLoading] = useState(false);

  const responseGoogle = async (e) => {
    setLoading(true);
    let UserData = {
      email: e.profileObj.email,
      name: e.profileObj.name,
      password: e.profileObj.googleId,
      avatar: e.profileObj.imageUrl,
    };
    await axios
      .post("https://newsapi-abipravi.herokuapp.com/auth", UserData)
      .then(
        (res) => {
          setLoading(false);
          console.log(res);
          window.location.reload();
        },
        (err) => {
          setLoading(false);
          alert("error when login please try again", err);
        }
      );
    localStorage.setItem("user", e.profileObj.email);
    localStorage.setItem("avatar", e.profileObj.imageUrl);
    localStorage.setItem("name", e.profileObj.name);
  };

  const loginlater = async () => {
    localStorage.setItem("user", "loginlater");
    localStorage.setItem(
      "avatar",
      "https://e7.pngegg.com/pngimages/929/428/png-clipart-responsive-web-design-navigation-bar-computer-icons-menu-hamburger-button-menu-text-cafe.png"
    );
    localStorage.setItem("name", "User");
    window.location.href = `${window.location.host}/home`;
    window.location.reload();
  };

  return (
    <>
      <div>
        {loading === false ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100vh",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              overflowX: "hidden",
            }}
          >
            <h4
              style={{
                margin: 10,
              }}
            >
              You Have Not Logged In please login with your google account here
            </h4>
            <GoogleLogin
              clientId={props.authid}
              onSuccess={responseGoogle}
              theme="dark"
              icon="false"
              onFailure={responseGoogle}
            />
            <button
              class="btn btn-outline-primary"
              style={{ marginTop: 20 }}
              onClick={loginlater}
            >
              Continue Without Login
            </button>
          </div>
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              padding: "100px",
            }}
          >
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
