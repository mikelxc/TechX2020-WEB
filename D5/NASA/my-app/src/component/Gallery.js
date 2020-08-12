import React from "react";
import Unit from "./Unit"

export default function Gallery(props) {
    return (
      <div className="Gallery">
        {props.picture.map((picture) => (
          <Unit
            title={picture.title}
            description={picture.description}
            url={picture.url}
            media_type={picture.media_type}
          />
        ))}
      </div>
    );
  }