import React from 'react'
import {GoogleLogin} from 'react-google-login'
export default function GoogleLoginComponent() {
    return (
        <div>
            <GoogleLogin clientId="692593559541-2rgin6kcfke1et55od12epm3tth3dp7a.apps.googleusercontent.com" onSuccess={response => console.log("s",response)} onFailure={response => console.log("f",response)}/>
        </div>
    )
}
