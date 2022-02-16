import React, { useState } from "react";
import axios from "axios";

const ArticlesCardComponent = (props) => {
  const [like, setLike] = useState(false);

  return (
    <div
      style={{ cursor: "pointer" }}
      className="border shadow-sm w-100 h-auto position-relative p-3"
    >
      <div className="card-body h-55 overflow-hidden">
        <h4 className="card-title">{props.articledata.title}</h4>
        <p className="card-text">{props.articledata.article}</p>
      </div>
      <div className="d-flex justify-content-center gap-3 position-absolute bottom-0 p-3 bg-white end-0">
        {/* <h5
          class={
            like == false
              ? "bi bi-heart text-danger"
              : "bi bi-heart-fill text-danger"
          }
          onClick={() => setLike(!like)}
        >
          {" "}
          {props.articledata.votes > 1000 && props.articledata.votes < 10000
            ? props.articledata.votes.toString().slice(0, 1) + "k"
            : ""}
          {props.articledata.votes >= 10000 && props.articledata.votes <= 100000
            ? props.articledata.votes.toString().slice(0, 2) + "k"
            : ""}
          {props.articledata.votes >= 100000 &&
          props.articledata.votes < 1000000
            ? props.articledata.votes.toString().slice(0, 3) + "k"
            : ""}
          {props.articledata.votes >= 1000000 &&
          props.articledata.votes < 10000000
            ? props.articledata.votes.toString().slice(0, 1) + "m"
            : ""}
          {props.articledata.votes > 1 && props.articledata.votes < 1000
            ? props.articledata.votes
            : ""}
        </h5> */}
        <h5 class="bi bi-bookmark-plus-fill text-primary"></h5>
        <h5 class="bi bi-send text-primary"></h5>
      </div>
    </div>
  );
};

export default ArticlesCardComponent;
