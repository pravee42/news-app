import React, { useState, useEffect } from 'react';
import GoogleAuth from './components_mobile_view/googleAuthMobile';
import { Page1component } from './components_mobile_view/page1';

export default function HomePageMobileComponent() {
    return (
        <div>
           {localStorage.getItem('user') ? <Page1component/> : <GoogleAuth />}
        </div>
    )
}