import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import TechNews from "./components/TechNews";
import Close from "./svg/x.svg";
import { useSwipeable } from "react-swipeable";
import { MobileView, BrowserView } from "react-device-detect";
import "./styles/App.css";
import EducationalNews from "./components/Educational";
import SportsNewsComponent from "./components/Sports";
import SportsNewsLatestComponent from "./components/SportsLatest";
import BusinessNews from "./components/business";
import GoogleLoginComponent from "./components/googleLogin";
import GoogleAuth from "./components/googleauth";
import ViewBookmark from "./components/viewbookmark";
import Economy from "./components/economy";
import Market from "./components/market";
import SearchNews from "./components/search";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SharedNewsComponent } from "./components/shared_news/SharedNews";
import HomePageMobileComponent from "./mobileview/home";
import VITE_GAUTH_ID from "./clintstore";
import axios from "axios";

export default function App() {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState(window.location.pathname);
  const [user, setUser] = useState("");

  function setopen() {
    setOpen(!open);
  }

  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, [localStorage.getItem("user")]);

  const handlers = useSwipeable({
    onSwipedRight: () => setOpen(!open),
    onSwipedLeft: () => setOpen(!open),
  });

  const setURLfunction = () => {
    let path = window.location.pathname;
    if (path === "/sports") {
      setUrl("/sports/latest");
    } else if (path === "/education") {
      setUrl("");
    } else {
      setUrl("");
    }
  };

  React.useEffect(() => {
    setURLfunction();
  }, [window.location.pathname]);

  const sessionAdd = async () => {
    let data = await sessionStorage.getItem("news");
    let postData = await {
      email: localStorage.getItem("user"),
      news: data.news,
      source: data.source,
      image: data.image,
    };
    await axios
      .post("https://newsapi-abipravi.herokuapp.com/bookmark/", postData)
      .then((res) => {
        sessionStorage.removeItem("news");
      });
    return <p>News Added to the bookmard</p>;
  };

  return (
    <div className="cursor_custom">
      {/* <BrowserView> */}
      <Router>
        <div>
          <ToastContainer />
          {user ? (
            <div style={{ overflow: "hidden", height: "100vh" }}>
              <div
                {...handlers}
                className="App"
                style={{ display: "flex", height: "100vh" }}
              >
                <div
                  onClick={setopen}
                  className={open === true ? "open" : "closed"}
                >
                  {open === false ? (
                    <div
                      style={{
                        padding: 3,
                        margin: 10,
                        position: "absolute",
                        border: "1px solid blue",
                        borderRadius: 100,
                      }}
                      className="avatar_div"
                    >
                      <img
                        src={localStorage.getItem("avatar")}
                        onClick={setopen}
                        lazy
                        className="avatar_img"
                        alt="avatar"
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}
                  {open === true && (
                    <>
                      <img
                        src={Close}
                        onClick={setopen}
                        alt="close menu icon"
                        style={{ width: "auto", height: "5%" }}
                      />
                      <div className="container_sidebar ">
                        <div>
                          <ul className="list-group">
                            <li>
                              <p class="btn btn-primary">
                                Welcome &nbsp;Back &nbsp;
                                <span className="h6">
                                  {localStorage.getItem("name")}
                                </span>
                              </p>
                            </li>
                            <li>
                              <Link class="btn btn-primary" to="/search">
                                Search News
                              </Link>
                            </li>
                            <li>
                              <Link class="btn btn-primary" to="/home">
                                Home
                              </Link>
                            </li>
                            <li>
                              <Link class="btn btn-primary" to="/tech">
                                Tech News
                              </Link>
                            </li>
                            <li>
                              <Link class="btn btn-primary" to="/sports">
                                Sports News
                              </Link>
                            </li>
                            <li>
                              <Link class="btn btn-primary" to="/education">
                                Educational News
                              </Link>
                            </li>
                            <li>
                              <Link class="btn btn-primary" to="/business">
                                Business News
                              </Link>
                            </li>
                            <li>
                              <Link class="btn btn-primary" to="/economy">
                                Economy
                              </Link>
                            </li>
                            <li>
                              <Link class="btn btn-primary" to="/market">
                                Share Market
                              </Link>
                            </li>
                            <li>
                              <Link class="btn btn-primary" to="/contact">
                                Feed Back Form
                              </Link>
                            </li>
                            {user === "loginlater" ? (
                              <i />
                            ) : (
                              <li>
                                <Link class="btn btn-primary" to="/bookmark">
                                  My Bookmarks
                                </Link>
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div class="main">
                  {url && (
                    <div class="url">
                      <p>
                        Go to
                        <Link to={url} className="link1">
                          {url}
                        </Link>
                      </p>
                    </div>
                  )}
                  <div class="news-container">
                    {sessionStorage.getItem("news") && toast.info(sessionAdd)}
                    <Switch>
                      <Route exact path="/home">
                        <Home />
                      </Route>
                      <Route exact path="/tech">
                        <TechNews />
                      </Route>
                      <Route path="/share">
                        <SharedNewsComponent />
                      </Route>
                      <Route path="/education">
                        <EducationalNews />
                      </Route>
                      <Route path="/login">
                        <GoogleAuth />
                      </Route>
                      <Route exact path="/googleauth">
                        <GoogleAuth />
                      </Route>
                      <Route exact path="/sports">
                        <SportsNewsComponent />
                      </Route>
                      <Route exact path="/sports/latest">
                        <SportsNewsLatestComponent />
                      </Route>
                      <Route exact path="/business">
                        <BusinessNews />
                      </Route>
                      <Route exact path="/contact">
                        <GoogleLoginComponent />
                      </Route>
                      <Route exact path="/bookmark">
                        <ViewBookmark />
                      </Route>
                      <Route exact path="/economy">
                        <Economy />
                      </Route>
                      <Route exact path="/market">
                        <Market />
                      </Route>
                      <Route exact path="/search">
                        <SearchNews />
                      </Route>
                      <Route exact path="/">
                        <Home />
                      </Route>
                    </Switch>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <GoogleAuth authid={VITE_GAUTH_ID} />
          )}
        </div>
      </Router>
      {/* </BrowserView> */}
      {/* <MobileView>
				<HomePageMobileComponent />
			</MobileView> */}
    </div>
  );
}
