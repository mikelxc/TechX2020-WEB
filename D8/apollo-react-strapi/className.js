import React from "react";

export default function className({id, ranking, classname, classimg}) {
    let url = "http://localhost:1337" + classimg[0].url;
    return (
        <section>
            <img src = {url} alt = {classname}></img>
            <h1>{id}</h1>
            <h1>{ranking}</h1>
            <h1>{classname}</h1>
        </section>
    )
}