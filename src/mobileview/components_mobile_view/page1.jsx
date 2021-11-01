import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styles from '../style.module.css'
import lightIcon from '../icons/light.png'
import darkIcon from '../icons/dark.png'


export const Page1component = () => {
    const [theme, setTheme] = useState("light");
    const [menu, setMenu] = useState(false);


    const getTheme = () => {
        if (localStorage.getItem("theme")) {
            setTheme(localStorage.getItem("theme"))
        }
        else {
            setTheme("light")
        }
    }

    const changeTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
        }
        else if (theme === "dark") {
            setTheme("light");
            localStorage.setItem("theme", "light");
        }
    }

    const toogleMenu = () => {
       setMenu(!menu) 
    }

    useEffect(() => {
        getTheme()
    }, [])

    return (
        <Router>
            <div className={theme === "light" ? styles.body_light : styles.body_dark}>
                {menu === false ? (
                <div className={styles.header}>
                    <div onClick={toogleMenu} className={theme === "light" ? styles.avatar_light : styles.avatar_dark}>
                        <img src={localStorage.getItem('avatar')} className={styles.image_avatar} lazy />
                    </div>
                    <div className={theme === 'light' ? styles.title_light : styles.title_dark}>
                        <h6>Abipravi</h6>
                    </div>
                    {
                        theme === 'light' ? <div onClick={changeTheme} className={styles.themeIcon}>
                        <img src={lightIcon} lazy />
                    </div> :  <div onClick={changeTheme} className={styles.themeIcon}>
                        <img src={darkIcon} lazy />
                    </div>
                    }
                </div>
                ) :
                    <div onClick={toogleMenu} className={theme === 'dark' ? styles.menu_dark : styles.menu_light}>
                        <div className={theme === 'dark' ? styles.menu_items_dark : styles.menu_items_light}>
                            <p className={styles.menu_items}>Profile</p>
                            <p className={styles.menu_items}>Sports News</p>
                            <p className={styles.menu_items}>Medical News</p>
                            <p className={styles.menu_items}>Cryptocurrency</p>
                            <p className={styles.menu_items}>Chat / Contact us</p>
                            <p className={styles.menu_items}>Devloper News</p>
                            <p className={styles.menu_items}>Stock Market</p>
                        </div>
                    </div>
                }
            </div>
        </Router>
    )
}
 