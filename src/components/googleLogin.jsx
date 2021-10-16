import React, { useState } from 'react'
import { GoogleLogin } from 'react-google-login'
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
        setLoading(true);
        let UserData = {
            email: e.profileObj.email,
            name: e.profileObj.name,
            password: e.profileObj.googleId,
            avatar: e.profileObj.imageUrl
        }
        await axios.post("https://newsapi-abipravi.herokuapp.com/auth", UserData).then(res => { setLoading(false); alert("Sucessfully logged in as", name)}, err => alert("err",err))
        console.log(e.profileObj.email)
        console.log(e.profileObj.googleId)
        console.log(e.profileObj.imageUrl)
        console.log(e.profileObj.name)
    }

    return (
        <div >
            <GoogleLogin clientId="692593559541-2rgin6kcfke1et55od12epm3tth3dp7a.apps.googleusercontent.com" onSuccess={responseGoogle}
                onFailure={responseGoogle} />
            {
                loading === false ? (<form onSubmit={sendmail}
                    style={{
                        margin: 10, display: 'flex', flexDirection: 'column', height: '40vh', width: '50%', justifyContent: 'space-between'
                    }}
                >
                    <input type="text" className="inputs border border-success rounded-2 shadow-sm" placeholder="Name" onChange={(e) => { setName(e.target.value) }} />
                    <input type="email" onChange={(e) => { setMail(e.target.value) }} className="inputs border border-success rounded-2 shadow-sm" placeholder="Email Address" />
                    <input type="text" className="inputs border border-success rounded-2 shadow-sm" placeholder="Subject" onChange={(e) => { setSubject(e.target.value) }} />
                    <textarea className="inputs border border-success rounded-2 shadow-sm" placeholder="Message" aria-label="With textarea"></textarea>
                    <div style={{ margin: 10 }}>
                        <button type="submit" class="btn btn-outline-primary">Send FeedBack Mail</button>
                    </div>
                </form>) : (<div
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

