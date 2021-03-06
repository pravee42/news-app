import React, { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";
import "./../styles/App.css";
import loadingImage from "../assests/loading-splash.gif";
export default function GoogleLoginComponent() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState(localStorage.getItem("name"));
  const [mail, setMail] = useState(localStorage.getItem("user"));
  const [loading, setLoading] = useState(false);

  const sendmail = async (e) => {
    e.preventDefault();
    let value = {
      subject: subject,
      message: message,
      name: name,
      gmailid: mail,
    };
    setLoading(true);
    await emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        value,
        process.env.REACT_APP_Email_Clint_ID
      )
      .then(
        (res) => {
          setLoading(false);
          toast.success("Feedback Sent");
        },
        (err) => {
          toast.error("error sending feedback");
        }
      );
  };

  return (
    <div>
      {loading === false ? (
        <div
          style={{
            margin: 10,
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            overflowX: "hidden",
          }}
        >
          <div
            style={{
              width: "50%",
              margin: 10,
            }}
          ></div>
          <div
            style={{
              padding: 10,
              border: "1px solid blue",
              marginTop: 10,
              display: "flex",
              flexDirection: "column",
              height: "60vh",
              width: "50%",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                fontSize: 30,
                fontWeight: 400,
              }}
            >
              Feed Back Form
            </p>
            <input
              type="text"
              value={name}
              className="inputs border border-success rounded-2 shadow-sm"
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="email"
              onChange={(e) => {
                setMail(e.target.value);
              }}
              value={mail}
              className="inputs border border-success rounded-2 shadow-sm"
              placeholder="Email Address"
            />
            <input
              type="text"
              value={subject}
              className="inputs border border-success rounded-2 shadow-sm"
              placeholder="Subject"
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="inputs border border-success rounded-2 shadow-sm"
              placeholder="Message"
              aria-label="With textarea"
            ></textarea>
            <div style={{ margin: 10 }}>
              <button onClick={sendmail} className="btn btn-outline-primary">
                Send FeedBack Mail
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "100px",
            backgroundColor: "#fcfefc",
          }}
        >
          <img src={loadingImage} alt="loading" />
        </div>
      )}
    </div>
  );
}
