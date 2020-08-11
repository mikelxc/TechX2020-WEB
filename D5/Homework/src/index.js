import React from "react";
import ReactDOM from "react-dom";
// import { render } from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let i;
        let thumb;
        console.log(data);
        for(i=0; i<data.length; i++) {
            function drinkList() {
                return React.createElement(
                    "ul",
                    null,
                    React.createElement("li", null, `Name: ${data.drinks[i].strDrink}`),
                    React.createElement("li", null, `Drink ID: ${data.drinks[i].idDrink}`),
                )
            }
            thumb = data.drinks[i].strDrinkThumb;
            document.getElementById("thumbnail").src = thumb;
        }
    ReactDOM.render(
        React.createElement(drinkList, null, null),
        document.getElementById("react-container")
    );
    });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
