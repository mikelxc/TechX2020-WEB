import React from "react";
import Ingredient from "./Ingredient";

export default function IngredientsList({ list }) {
  return (
    <ul className="drinks">
      {list.map((ingredient, i) => (
        <Ingredient key={i} {...ingredient} />
        // <Ingredient
        //   amount={ingredient.amount}
        //   measurement={ingredient.measurement}
        //   name={ingredient.name}
        // />
      ))}
    </ul>
  );
}
