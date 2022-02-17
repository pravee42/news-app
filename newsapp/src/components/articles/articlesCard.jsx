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
    setLike(true);
    setDisLike(false);

    let data = props.articledata;
    data.votes = data.votes + 1;

    const res = await axios.put(
      `https://newsapi-abipravi.herokuapp.com/articles/${data.id}/`,
      data
    );
    await console.log(res);
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
      className="p-3 border border-2"
      style={{ width: "100%", cursor: "pointer" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="p-3 overflow-hidden position-relative ">
        {hover === true ? (
          <div className="d-flex bg-dark position-absolute top-0 w-100 justify-content-between position-relative p-4">
            <p className="text-dark">{props.articledata.author}</p>
            <h3 className="bi bi-cloud-arrow-down-fill h-3 text-secondary"></h3>
          </div>
        ) : (
          ""
        )}
        <div style={{ width: "600px", maxHeight: "400px", overflow: "hidden" }}>
          <ReactMarkdown children={mdtitle} remarkPlugins={[remarkGfm]} />
        </div>
        <div
          style={{ maxHeight: "100px", margin: 5 }}
          className="h-25 overflow-hidden"
        >
          <ReactMarkdown children={mddis} remarkPlugins={[remarkGfm]} />
        </div>
      </div>
    </div>
  );
};

export default ArticlesCardComponent;
