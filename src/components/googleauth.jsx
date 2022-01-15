import React, { useState, useEffect } from "react";
import { GoogleLogin } from "react-google-login";
// import TwitterUserAuth from "./twitterauth";
import axios from "axios";
import { toast } from "react-toastify";
import avatarImage from "../images/avatar.png";
import "react-toastify/dist/ReactToastify.css";

export default function GoogleAuth(props) {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [confrimpassword, setConfrimpassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [alert, setAlert] = useState(false);
  const [showRegisterform, setShowRegisterform] = useState(false);

  const showRegister = async () => {
    await setShowRegisterform(!showRegisterform).then(() => alert(";dfjhg"));
  };

  const RegisterManual = async () => {
    if (password === confrimpassword) {
      setLoading(true);
      let UserData = {
        email: email,
        name: name,
        password: password,
        avatar: avatar,
      };
      await axios
        .post(
          "https://newsapi-abipravi.herokuapp.com/auth/createuser/",
          UserData
        )
        .then(
          (res) => {
            setLoading(false);
            toast.success("User Created Sucessfully now you can login");
          },
          (err) => {
            setLoading(false);
            toast.info("User Already Exists We are logging you in");
            console.log(err);
          }
        );
      setLoading(false);
      localStorage.setItem("user", email);
      localStorage.setItem("avatar", avatar);
      localStorage.setItem("name", name);
      window.location.reload();
    } else {
      setAlert(true);
    }
  };

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
          localStorage.setItem("user", e.profileObj.email);
          localStorage.setItem("avatar", e.profileObj.imageUrl);
          localStorage.setItem("name", e.profileObj.name);
          window.location.reload();
        },
        (err) => {
          setLoading(false);
          toast.error(
            "User Does not Exists Please register or continue without Login"
          );
        }
      );
  };

  const Register = async (e) => {
    setLoading(true);
    let UserData = {
      email: e.profileObj.email,
      name: e.profileObj.name,
      password: e.profileObj.googleId,
      avatar: e.profileObj.imageUrl,
    };
    await axios
      .post("https://newsapi-abipravi.herokuapp.com/auth/createuser/", UserData)
      .then(
        (res) => {
          setLoading(false);
          toast.success("User Created Sucessfully now you can login");
        },
        (err) => {
          setLoading(false);
          toast.info(
            "User Already Exists Click Login or use the App without login"
          );
          console.log(err);
        }
      );
    setLoading(false);
    localStorage.setItem("user", e.profileObj.email);
    localStorage.setItem("avatar", e.profileObj.imageUrl);
    localStorage.setItem("name", e.profileObj.name);
  };

  const loginlater = async () => {
    localStorage.setItem("user", "loginlater");
    localStorage.setItem("avatar", avatarImage);
    localStorage.setItem("name", "User");
    window.location.href = `${window.location.host}/home`;
    window.location.reload();
  };

  const LoginManual = async () => {
    setLoading(true);
    let UserData = {
      email: email,
      name: name,
      password: password,
    };
    await axios
      .post("https://newsapi-abipravi.herokuapp.com/auth", UserData)
      .then(
        (res) => {
          setLoading(false);
          console.log(res);
          localStorage.setItem("user", email);
          localStorage.setItem("avatar", avatarImage);
          localStorage.setItem("name", name);
          window.location.reload();
        },
        (err) => {
          setLoading(false);
          toast.error(
            "User Does not Exists Please register or continue without Login"
          );
        }
      );
  };

  const forgetpassword = async () => {
    await toast.error(
      "Sorry we cannot recover your password for some security reasons."
    );
    await toast.info(
      "Try using your google account login instead or create a new account and try contacting us we will transfer your data to the newly created account",
      { delay: 5000 }
    );
  };

  return (
    <>
      <div>
        {loading === false ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",

              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100vh",
                // width: "50%",
                justifyContent: "center",
                padding: "20px",
                alignItems: "center",
                overflowX: "hidden",
              }}
            >
              {showRegisterform === false && (
                <>
                  <h4
                    style={{
                      fontSize: 15,
                    }}
                    className="alert alert-info"
                  >
                    You Have Not Logged In please login with your google account
                    here
                  </h4>
                  <div className="d-flex flex-row gap-1">
                    <GoogleLogin
                      clientId={props.authid}
                      onSuccess={responseGoogle}
                      render={(renderProps) => (
                        <button
                          onClick={renderProps.onClick}
                          disabled={renderProps.disabled}
                          class="bi bi-google btn btn-dark"
                        ></button>
                      )}
                      theme="dark"
                      icon="false"
                      onFailure={responseGoogle}
                    />
                  </div>
                  <button
                    className="btn btn-outline-dark"
                    style={{ marginTop: 20 }}
                    onClick={loginlater}
                  >
                    Continue Without Login
                  </button>
                </>
              )}
            </div>
            <div
              className="d-flex flex-row justify-content-center align-middle"
              style={{ flexWrap: "wrap" }}
            >
              <div>
                {showRegisterform === true && (
                  <GoogleLogin
                    clientId={props.authid}
                    onSuccess={Register}
                    render={(renderProps) => (
                      <h3
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        class="bi bi-google btn btn-dark h-0"
                      >
                        {" "}
                        &nbsp; Register With Google
                      </h3>
                    )}
                    theme="dark"
                    icon="false"
                    className="btn btn-outline-primary"
                    buttonText="Register With Google Account"
                    onFailure={Register}
                  />
                )}
              </div>
              <div>
                {showRegisterform && (
                  <div
                    className="d-grid gap-2"
                    style={{
                      margin: 20,
                      height: "100%",
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <div class="form-floating mb-3">
                      <input
                        type="email"
                        class="form-control"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input
                        type="text"
                        class="form-control"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        id="floatingInput"
                        placeholder="user name"
                      />
                      <label for="floatingInput">Name</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input
                        type="password"
                        class="form-control"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        id="floatingInput"
                        placeholder="password"
                      />
                      <label for="floatingInput">Password</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input
                        type="password"
                        class="form-control"
                        onChange={(e) => {
                          setConfrimpassword(e.target.value);
                        }}
                        id="floatingInput"
                        placeholder="password"
                      />
                      <label for="floatingInput">Retype Password</label>
                    </div>
                    {alert === true && (
                      <div class="alert alert-danger" role="alert">
                        Password Does not match
                      </div>
                    )}
                    <div class="form-floating mb-3">
                      <input
                        type="url"
                        class="form-control"
                        onChange={(e) => {
                          setAvatar(e.target.value);
                        }}
                        id="floatingInput"
                        placeholder="https:www.avatar.com/useravatar"
                      />
                      <label for="floatingInput">Avatar Image</label>
                    </div>

                    <button
                      className="btn btn-outline-success"
                      onClick={RegisterManual}
                    >
                      Submit
                    </button>
                    <p className="btn btn-dark p-2" onClick={showRegister}>
                      Back to Login
                    </p>
                  </div>
                )}
              </div>
            </div>

            {showRegisterform === false && (
              <div>
                <div class="form-floating mb-3">
                  <input
                    type="url"
                    class="form-control"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    id="floatingInput"
                    placeholder="Email Id"
                  />
                  <label for="floatingInput">Email Address</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="password"
                    class="form-control"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    id="floatingInput"
                    placeholder="Password"
                  />
                  <label for="floatingInput">Password</label>
                </div>
                <button
                  className="btn btn-outline-success"
                  onClick={LoginManual}
                >
                  Login
                </button>
                <button
                  className="btn btn-danger"
                  style={{ margin: 5 }}
                  onClick={forgetpassword}
                >
                  Forget Password
                </button>
                <div className="d-flex gap-1 align-middle justify-content-center p-2">
                  <p className="badge bg-danger">Dont have account:</p>
                  <a
                    href="#"
                    className="breadcrumb-item"
                    onClick={showRegister}
                  >
                    Register?
                  </a>
                </div>
              </div>
            )}
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
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
