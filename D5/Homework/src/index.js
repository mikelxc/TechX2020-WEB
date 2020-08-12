import React from "react";
import ReactDOM from "react-dom";
// import { render } from "react-dom";
import "./index.css";
import List from "./components/CompleteList";
import data from "./data/recipes.json";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<List recipes={data} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
