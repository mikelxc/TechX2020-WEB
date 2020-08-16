import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Wix from './components/Wix';
import aego from "./components/Fech";  
// import data from "./data/classes.json"
import * as serviceWorker from './serviceWorker';

const App = ({children}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
    // aego().then((result) => {
    //     setData(result);
    fetch("http://127.0.0.1:1337/classes")
    .then((response) => response.json())
    .then((d) => {
        setData(d);
    })
    return () => {};
    }, []);
    return ( data ?
        <Wix classes={data} /> : <p>Nothing in the data</p>
    );
}
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
