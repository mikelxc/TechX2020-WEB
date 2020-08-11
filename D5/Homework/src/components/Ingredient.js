import React from "react";

export default function Ingredient({ strDrink, strDrinkThumb, idDrink }) {
  return (
    <li>
      {strDrink} {strDrinkThumb} {idDrink}
    </li>
  );
}
