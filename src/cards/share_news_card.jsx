import React, { useEffect } from "react";
import "./style.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SharedNewsCardComponent(props) {
  const goto = () => {
    return (
      <div>
        <a href="/login">Login to add the news to Bookmark</a>
      </div>
    );
  };

  useEffect(() => {
    document.title = props.news;
  }, []);

  const add_to_bookmark = async (news, source, image) => {
    console.log(news, source, image);
    let email = localStorage.getItem("user");
    if (email === null || email === "loginlater") {
      toast.info(goto);
    } else {
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
    }
  };
  return (
    <>
      <link rel="icon" href={props.image} />
      <div className="newsCard border border-light shadow-sm p-3 mb-5 bg-body rounded">
        <img
          src={props.image}
          lazy
          alt={"Loading error"}
          style={{ maxHeight: 100, width: 150 }}
          className="img-thumbnail"
        />
        <div className="news">
          {props.shortnews && <h6 className="heading ">{props.news}</h6>}
          {!props.shortnews && <h6 className="heading">{props.news}</h6>}
          <p className="summary text-muted">{props.shortnews}</p>
          <div
            className="d-flex justify-content-start d-grid gap-3"
            style={{ width: "50%" }}
          >
            <a
              className="btn btn-outline-primary"
              rel="noreferrer"
              href={props.source}
              target="_blank"
            >
              Source
            </a>
            <button
              onClick={() =>
                add_to_bookmark(props.news, props.link, props.image)
              }
              className="btn btn-outline-primary space"
            >
              Add to Bookmark
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
