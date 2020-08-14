import React from "react";

export default function ClassItem({ StartTime, EndTime, ClassName, ClassImg }) {
  let url = "http://localhost:1337" + ClassImg[0].url;

  return (
    <div>
      <img src={url}></img>
      <h1>{ClassName}</h1>
      <h3>
        It starts on {StartTime} and ends on {EndTime}
      </h3>
    </div>
  );
}
