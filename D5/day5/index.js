import React from "react";
import ReactDOM from "react-dom";
import State from './state';

function App() {
    return (
        <div className="app">
            <h1>React Hooks</h1>
            <State />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));