import React from "react";
import Drink from "./Drink";

export default function DrinksList({ list }) {
  return (
    <ul className="drinks" class="list">
      {list.map((drink, i) => (
        <Drink key={i} {...drink} />
        // <Ingredient
        //   amount={ingredient.amount}
        //   measurement={ingredient.measurement}
        //   name={ingredient.name}
        // />
      ))}
    </ul>
  );
}

