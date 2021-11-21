import React from "react";
import axios from "axios";
import "./style.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NewsCardComponent1(props) {
  const _deletebookmark = async (id) => {
    const url = `https://newsapi-abipravi.herokuapp.com/bookmark/delete/${id}`;
    await axios.delete(url).then(
      (res) => {
        window.location.reload();
        toast.error("Bookmark Deleted");
      },
      (err) => console.log(err)
    );
  };

  return (
    <>
      <div className="newsCard border border-light shadow-sm p-3 mb-5 bg-body rounded ">
        <img
          src={props.image}
          lazy
          alt={"Loading error"}
          style={{ maxHeight: 150 }}
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
              href={props.link}
              target="_blank"
            >
              Source
            </a>
            <button
              onClick={() => _deletebookmark(props.bkid)}
              className="btn btn-danger space"
            >
              Delete Bookmark
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
