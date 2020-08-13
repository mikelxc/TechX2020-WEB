import React from "react";
import ReactDOM from "react-dom";
// import { render } from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

fetch("http://localhost:1337/classes")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        for (let i = 0; i < data.length; i++) {
            let l1 = data[i].id;
            let l2 = data[i].classname;
            let l5 = data[i].classimg[0].name;
            const element = (
                <ul>
                    <li>ID : {l1}</li>
                    <li>Class Name : {l2}</li>
                    <img src={l5}></img>
                </ul>
            );
            ReactDOM.render(
                element,
                document.getElementById(`react-container${i + 1}`)
            );
        }
    });

serviceWorker.unregister();

