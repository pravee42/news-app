import React, { useState } from "react";
import axios from "axios";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Ripples from "react-ripples";
import LoadingBar from "react-top-loading-bar";
import "animate.css";
import "./customstyles.css";

const ArticlesCardComponent = (props) => {
  const [like, setLike] = useState(false);
  const [progress, setProgress] = useState(0);
  const [disLike, setDisLike] = useState(false);
  const [hover, setHover] = useState(false);

  const mdtitle = `${props.articledata.title}`;
  const mddis = `${props.articledata.article}`;

  const Like = async () => {
    setLike(!like);

    let data = props.articledata;
    data.votes = data.votes + 1;

    // const res = await axios.put(
    //   `https://newsapi-abipravi.herokuapp.com/articles/${data.id}/`,
    //   data
    // );
    // await console.log(res);
    await setProgress(progress + 100);
  };

  const DisLike = async () => {
    setDisLike(true);
    setLike(false);
    let data = props.articledata;
    data.votes = data.votes - 1;

    const res = await axios.put(
      `https://newsapi-abipravi.herokuapp.com/articles/${data.id}/`,
      data
    );
    await console.log(res);
    await setProgress(progress + 100);
  };

  return (
    <div
      className="border border-2 position-relative overflow-hidden"
      style={{
        width: "100%",
        cursor: "pointer",
        borderRadius: "10px 10px",
        zIndex: localStorage.getItem("open") === "true" ? "-1" : "0",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover === true ? (
        <div
          style={{ borderRadius: "10px 10px 0 0" }}
          className="d-flex bg-dark position-absolute top-0 w-100 justify-content-between position-relative p-2"
        >
          <p className="text-white" style={{ marginRight: 25 }}>
            {props.articledata.author}
          </p>
          <Ripples>
            <button className="btn btn-danger rounded circle">Save</button>
          </Ripples>
        </div>
      ) : (
        ""
      )}
      <div className="overflow-hidden">
        <div style={{ width: "600px", maxHeight: "300px", overflow: "hidden" }}>
          <ReactMarkdown children={mdtitle} remarkPlugins={[remarkGfm]} />
        </div>
        <div
          style={{ maxHeight: "100px", margin: 5 }}
          className="overflow-hidden"
        >
          <ReactMarkdown children={mddis} remarkPlugins={[remarkGfm]} />
        </div>
        <div style={{ padding: "5px 0 0 5px" }}>
          {like === false ? (
            <h4 className="bi bi-heart text-dark" onClick={Like}></h4>
          ) : (
            <h4 className="bi bi-heart-fill text-danger" onClick={Like}></h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticlesCardComponent;
