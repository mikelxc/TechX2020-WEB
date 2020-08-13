import React from "react";
import './ResultItem.css'

const ResultItem = ({ info }) => {
  return (
    // <li>
    //     <p>{info.common_name}</p>
    // </li>
    <div className="card">
      <img
        src={info.image_url}
        alt="plant"
        style={{ width: "100%", height: "attr(width)" }}
      />
      <div className="container">
        <h4>
          <b>{info.scientific_name}</b>
        </h4>
        <p>
          {info.common_name && `Commonly called ${info.common_name}. `}
          {info.year && `Discovered in ${info.year}.`}
        </p>
      </div>
    </div>
  );
};

export default ResultItem;
