import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styles from './styles_mobile/stylenavbar.module.css'
import bookmark from '../icons/bookmark.png'
import business from '../icons/business.png'
import home from '../icons/home.png'
import tech from '../icons/tech.png'
import education from '../icons/education.png'
import bookmark_dark from '../icons/dark_nav_bar_icons/bookmark.png'
import business_dark from '../icons/dark_nav_bar_icons/business.png'
import home_dark from '../icons/dark_nav_bar_icons/home.png'
import tech_dark from '../icons/dark_nav_bar_icons/tech.png'
import education_dark from '../icons/dark_nav_bar_icons/education.png'



export default function BottomNavbar() {
    const [theme, setTheme] = useState("");

    useEffect(() => {
        setTheme(localStorage.getItem("theme"))
    }, [localStorage.getItem("theme")])

    return (
        <Router>
        <div className={theme === "light" ? styles.navbar_light : styles.navbar_dark}>
            {theme === "dark" ? (
                <>
                    <Link className={styles.image_school} to="/education"></Link>
                    <Link className={styles.image_tech} to="/tech"></Link>
                    <Link className={styles.image_home} to="/"></Link>
                    <Link className={styles.image_business} to="/business"></Link>
                    <Link className={styles.image_bookmark} to="/bookmark"></Link>
                    {/* <img src={tech} lazy />
                    <img src={home} lazy />
                    <img src={business} lazy />
                    <img src={bookmark} lazy /> */}
                </>
            ) : (
                    <>
                        <img src={education_dark} lazy />
                        <img src={tech_dark} lazy />
                        <img src={home_dark} lazy />
                        <img src={business_dark} lazy />
                        <img src={bookmark_dark} lazy />
                    </>
            )}
        </div>
        </Router>
    )
}