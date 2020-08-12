import React from "react";

export default function Drink({ strDrink, idDrink }) {
  return (
    <li>
      Name: {strDrink}, ID: {idDrink}
    </li>
  );
}
