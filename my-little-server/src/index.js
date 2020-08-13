import React from "react";
import ReactDOM from "react-dom";
// import { render } from "react-dom";
import "./index.css";
import List from "./components/CompleteList";
import data from "./data/recipes.json";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<List recipes={data} />, document.getElementById("root"));

serviceWorker.unregister();

