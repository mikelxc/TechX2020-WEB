import React from "react";

export default function Drink({ strDrink, idDrink, strDrinkThumb }) {
  return (
    <li>
      Name: {strDrink}, ID: {idDrink}
      <pre></pre>
      <img src={strDrinkThumb} height="100px" width="80px"/>
    </li>
  );
}

