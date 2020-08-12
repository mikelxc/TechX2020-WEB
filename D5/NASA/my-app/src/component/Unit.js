import React from "react";
import Media from "./Media";
export default function Unit(props) {
  return (
      <div className="Unit">
        <Media
          url={props.url}
          title={props.title}
          media_type={props.media_type}
        />
        <h2 id="description" className="title">{props.title}</h2>
        <p id="description" className="description">{props.description}</p>
        <button type="button"
          onclick="document.getElementById('description').style.color = 'blue'"></button>
      </div>

  );
}
