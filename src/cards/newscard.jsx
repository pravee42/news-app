import React, { useState } from "react";
import "./style.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VITE_GAUTH_ID from "../clintstore";
import GoogleAuth from "../components/googleauth";
import axios from "axios";

export default function NewsCardComponent(props) {
  const add_to_bookmark = async (news, source, image) => {
    let email = localStorage.getItem("user");
    //    if (email === null || email === "loginlater") {
    //    let responseData = await {
    //    email,
    //  news,
    // source,
    //image,
    //};
    //localStorage.clear();
    //sessionStorage.clear();
    //sessionStorage.setItem("news", JSON.stringify(responseData));
    // }
    //	else {
    let responseData = await {
      email,
      news,
      source,
      image,
    };
    await axios
      .post("https://newsapi-abipravi.herokuapp.com/bookmark/", responseData)
      .then(
        (res) => {
          toast.success("Added to Bookmarked");
        },
        (err) => console.log(responseData, "error")
      );
    //}
  };

  let id;
  const sharenews = async (news, source, image) => {
    const url = `https://newsapi-abipravi.herokuapp.com/share/post`;
    let data = await {
      news,
      source,
      image,
    };
    await axios.post(url, data).then(
      (res) => (id = res.data.id),
      (err) => {
        console.log(err);
      }
    );
    await toast.success(`Link Copied to clipboard`);
    await console.log(id, "id");
    await navigator.clipboard.writeText(
      `https://${window.location.host}/share/${window.btoa(id)}`
    );
  }

    const closemodel = async () => {
      await localStorage.setItem("user", "loginlater");
      await localStorage.setItem(
        "avatar",
        "https://e7.pngegg.com/pngimages/929/428/png-clipart-responsive-web-design-navigation-bar-computer-icons-menu-hamburger-button-menu-text-cafe.png"
      );
      await localStorage.setItem("name", "User");
      await sessionStorage.removeItem("news");
    };

    // useEffect(async () => {
    // 	await sessionStorage.setItem("Twitter", `https://twitter.com/intent/tweet?text=${window.location.host}/share/${window.btoa(id)}`)
    // 	await sessionStorage.setItem("FACEBOOK", `https://web.whatsapp.com://send?text=${window.location.host}/share/${window.btoa(id)}`)
    // 	await sessionStorage.setItem("Whatsapp", `https://www.facebook.com/sharer/sharer.php?u=${window.location.host}/share/${window.btoa(id)}`)
    // }, [change])

    return (
      <>
        <div className="newsCard border border-light align-left shadow-sm p-3 mb-5 bg-body rounded ">
          <img
            src={props.image}
            lazy
            alt={"loading error"}
            style={{ maxHeight: 100, width: 150 }}
            className="img-thumbnail"
          />
          <div className="news">
            {props.shortnews && <h6 className="heading ">{props.news}</h6>}
            {!props.shortnews && <h6 className="heading">{props.news}</h6>}
            <p className="summary text-muted">{props.shortnews}</p>
            <div class="align-center" style={{ width: "100%" }}>
              <a
                className="btn btn-outline-primary float-start"
                rel="noreferrer"
                href={props.link}
                target="_blank"
              >
                Source
              </a>
              {localStorage.getItem("user") === "loginlater" && (
                <svg
                  onClick={() =>
                    add_to_bookmark(props.news, props.link, props.image)
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="35"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  fill="#0d6efd"
                  class="bi bi-bookmark-plus-fill float-end"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm6.5-11a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5V4.5z"
                  />
                </svg>
              )}
              {localStorage.getItem("user") !== "loginlater" && (
                <svg
                  onClick={() =>
                    add_to_bookmark(props.news, props.link, props.image)
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="35"
                  fill="#0d6efd"
                  class="bi bi-bookmark-plus-fill float-end"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm6.5-11a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5V4.5z"
                  />
                </svg>
              )}
              <svg
                onClick={() => sharenews(props.news, props.link, props.image)}
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginRight: 20 }}
                width="20"
                height="35"
                fill="#0d6efd"
                class="bi bi-share-fill float-end"
                viewBox="0 0 16 16"
              >
                <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
              </svg>
            </div>
            <div
              class="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">
                      Login to add news to bookmark
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      onClick={closemodel}
                      aria-label="Close"
                    ></button>
                  </div>
                  <GoogleAuth clintId={VITE_GAUTH_ID} />{" "}
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-danger"
                      data-bs-dismiss="modal"
                      onClick={closemodel}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
