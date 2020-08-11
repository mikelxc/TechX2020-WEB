import React from "react";

export default function Ingredient({ strDrink, idDrink }) {
  return (
    <li>
      Name: {strDrink}, ID: {idDrink}
    </li>
  );
}
