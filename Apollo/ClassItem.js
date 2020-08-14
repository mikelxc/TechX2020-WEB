import React from "react";

export default function ClassItem({})
    let url ="http://localhost:1337"
    return(
        <section>
            <img src={url} alt={ClassName}></img>
            <h1>{ClassName}</h1>
            <h3>
            It starts on {} and end on {}
            </h3>
        </section>
    )