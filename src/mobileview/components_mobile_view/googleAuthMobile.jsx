import React, {useState} from 'react'
import { GoogleLogin } from 'react-google-login'
import {toast} from 'react-toastify';
import axios from 'axios';

export default function GoogleAuth() {
    const [loading, setLoading] = useState(false)

    const responseGoogle = async (e) => {
        setLoading(true);
        let UserData = {
            email: e.profileObj.email,
            name: e.profileObj.name,
            password: e.profileObj.googleId,
            avatar: e.profileObj.imageUrl
        }
        await axios.post("https://newsapi-abipravi.herokuapp.com/auth", UserData).then(res => { setLoading(false); window.location.reload();  toast.success('User Created Successfully');},
            (err => {
                setLoading(false);
                toast.success('User Created Successfully');
            }
            ))
        localStorage.setItem("user", e.profileObj.email)
        localStorage.setItem("avatar", e.profileObj.imageUrl)
        localStorage.setItem("name", e.profileObj.name)
    }

    return (
        <div>
            {
                loading === false ? (<div
                    style={{
                        display: 'flex', flexDirection: 'column', height: '100vh', width: '100%', justifyContent: 'center', alignItems: 'center',
                        overflowX: 'hidden',
                    }}
                >
                    <h4 style={{
                        margin: 10
                    }}>You Have Not Logged In please login with your google account here</h4>
                    <GoogleLogin clientId="692593559541-2rgin6kcfke1et55od12epm3tth3dp7a.apps.googleusercontent.com" render={renderProps => (
                            <button className="btn btn-danger"onClick={renderProps.onClick} disabled={renderProps.disabled}>Login With Google for ABIPRAVI_NEWS</button>
                            )}
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}/>
                    </div>
                ) : (<div
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