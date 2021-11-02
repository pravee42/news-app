import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styles from '../style.module.css'
import lightIcon from '../icons/light.png'
import darkIcon from '../icons/dark.png'
import backicon from '../icons/back_icon.png'
import Home from './pages/Home';
import BottomNavbar from './botton_navbar';


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
                <div className={theme === "light" ? styles.header_light : styles.header_dark}>
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
                        <img className={styles.backimage} src={backicon} lazy />
                        <div className={theme === 'dark' ? styles.menu_items_dark : styles.menu_items_light}>
                            <Link className={styles.menu_items} to="/profile">Profile</Link>
                            <Link className={styles.menu_items} to="/sports"> Sports News</Link>
                            <Link className={styles.menu_items} to="/medical"> Medical News</Link>
                            <Link className={styles.menu_items} to="/crypto"> Cryptocurrency</Link>
                            <Link className={styles.menu_items} to="/chat"> Chat / Contact us</Link>
                            <Link className={styles.menu_items} to="/developernews"> Devloper News</Link>
                            <Link className={styles.menu_items} to="/stockmarket"> Stock Market</Link>
                        </div>
                      
                    </div>
                }
                <div className={theme === 'light' ? styles.routing_body_light : styles.routing_body_dark}>
                    {menu === false ? (
                        <Switch>
                        <Route exact path="/profile">
                            <p>Profile</p>
                        </Route>
                        <Route exact path="/sports">
                            <p>sports</p>
                        </Route>
                        <Route exact path="/chat">
                            <p>chat</p>
                        </Route>
                        <Route exact path="/medical">
                            <p>medical</p>
                        </Route>
                        <Route exact path="/crypto">
                            <p>crypto</p>
                        </Route>
                        <Route exact path="/devlopernews">
                            <p>devlopernews</p>
                        </Route>
                        <Route exact path="/stockmarket">
                            <p>stockmarket</p>
                        </Route>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/tech">
                            <p>tech</p>
                        </Route>
                        <Route exact path="/business">
                            <p>business</p>
                        </Route>
                    </Switch>
                    ) : (<div></div>)}
                </div>
                {menu === false && (
                    <div style={{position: 'fixed', bottom: 0}}>
                        <BottomNavbar />
                    </div>
                )}
            </div>
        </Router>
    )
}
 