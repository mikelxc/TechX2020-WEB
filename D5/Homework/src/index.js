import React from "react";
import ReactDOM from "react-dom";
// import { render } from "react-dom";
import "./index.css";
import Menu from "./components/Menu";
import data from "./data/recipes.json";
import * as serviceWorker from "./serviceWorker";

fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then((response) => {
    return response.json();
    })
    .then((data) => {
    let i = data;
    let thumb = i.drinks[0].strDrinkThumb;
    console.log(i);
    function drinkList() {
        return React.createElement(
        "ul",
        null,
        React.createElement("li", null, `Name: ${i.drinks[0].strDrink}`),
        React.createElement("li", null, `Drink ID: ${i.drinks[0].idDrink}`),
        React.createElement(
            "li",
            null,
            `It is ${i.drinks[0].strAlcoholic.toLowerCase()}.`
        ),
        React.createElement(
            "li",
            null,
            `It is a(n) ${i.drinks[0].strCategory.toLowerCase()}.`
        )
        );
    }
    document.getElementById("thumbnail").src = thumb;
    ReactDOM.render(
        React.createElement(drinkList, null, null),
        document.getElementById("react-container")
    );
    });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
