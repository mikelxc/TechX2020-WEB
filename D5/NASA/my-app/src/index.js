import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Gallery from "./component/Gallery";
import Get from "./component/Get";
// import NASAJson from "./data/NasaList.json"
import './NASA.css';
import { Router, Link } from "@reach/router";

let NASAJson = Get("https://apodapi.herokuapp.com/api/?count=6")
let Dashboard = () => <div> Dashboard </div>;

const App = ({}) => (
  <div className="I">
    <nav ClassName="navbar">
      <Link to="gallery">gallery  </Link>
      <Link to="dashboard">Dashboard</Link>
    </nav>

    <Router>
      <Gallery path="gallery" picture={NASAJson} />
      <Dashboard path="dashboard" />
    </Router>
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
// ReactDOM.render(
//   <Gallery path="menu" picture={NASAJson} />,
//   document.getElementById("root")
// );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
