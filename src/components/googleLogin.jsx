import React, { useState } from 'react'
import axios from 'axios';
import emailjs from 'emailjs-com';
import './../styles/App.css';
export default function GoogleLoginComponent() {
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [loading, setLoading] = useState(false)


    const sendmail = async (e) => {
        e.preventDefault();
        let value = {
            subject: subject,
            message: message,
            name: name,
            gmailid: mail,
        }
        setLoading(true)
        await emailjs.send(process.env.REACT_APP_1SERVICE_ID, process.env.REACT_APP_1TEMPLATE_ID, value, process.env.REACT_APP_Email_Clint_ID).then(res => { setLoading(false); alert("Feedback Sent") }, err => { alert("error sending feedback") })
    }

    const responseGoogle = async (e) => {
        await setName(e.profileObj.name)
        await setMail(e.profileObj.email)
        setLoading(true);
        let UserData = {
            email: e.profileObj.email,
            name: e.profileObj.name,
            password: e.profileObj.googleId,
            avatar: e.profileObj.imageUrl
        }
        await axios.post("https://newsapi-abipravi.herokuapp.com/auth", UserData).then(res => { setLoading(false); alert(`Sucessfully logged in as: ${e.profileObj.name}`) },
            (err => {
                setLoading(false);
                alert("err", err)
        }
            ))
        await localStorage.setItem("user", e.profileObj.email)
    }

    return (
        <div >
            {
                loading === false ? (<div
                    style={{
                        margin: 10, display: 'flex', flexDirection: 'column', height: '100vh', width: '100%', justifyContent: 'center', alignItems: 'center',
                        overflowX: 'hidden',
                    }}
                >
                    <div style={{
                        width: '50%',
                        margin: 10
                    }}>
                    </div>
                    <div style={{ padding: 10, border: '1px solid blue', marginTop: 10, display: 'flex', flexDirection: 'column', height: '60vh', width: '50%', justifyContent: 'space-between' }}>
                        <p style={{
                            fontSize: 30,
                            fontWeight: 400,
                        }}>Feed Back Form</p>
                        <input type="text" value={name} className="inputs border border-success rounded-2 shadow-sm" placeholder="Name" onChange={(e) => { setName(e.target.value) }} />
                        <input type="email" onChange={(e) => { setMail(e.target.value) }} value={mail} className="inputs border border-success rounded-2 shadow-sm" placeholder="Email Address" />
                        <input type="text" value={subject} className="inputs border border-success rounded-2 shadow-sm" placeholder="Subject" onChange={(e) => { setSubject(e.target.value) }} />
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)}className="inputs border border-success rounded-2 shadow-sm" placeholder="Message" aria-label="With textarea"></textarea>
                        <div style={{ margin: 10 }}>
                            <button onClick={sendmail} class="btn btn-outline-primary">Send FeedBack Mail</button>
                        </div>
                   </div>
                </div>) : (<div
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '100px',
                    }}>
                    <div class='spinner-border text-primary' role='status'>
                        <span class='visually-hidden'>Loading...</span>
                    </div>
                </div>)
            }
        </div>
    )
}

