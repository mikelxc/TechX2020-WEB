import React from "react";

export default function Media(props) {
    console.log(props.media_type);
    if (props.media_type === "image") {
      console.log(1);
      return <img src={props.url} className="image" alt=""/>;
    } else {
      return <embed type="video/webm" src={props.url} className="video" />;
    }}