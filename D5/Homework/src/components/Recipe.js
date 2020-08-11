import React from "react";
import IngredientsList from "./IngredientsList";
import Instructions from "./Instructions";

function Recipe({ name, drinks, steps }) {
  return (
    <section id={name.toLowerCase().replace(/ /g, "-")}>
      <h1 id="title">{name}</h1>
      <IngredientsList list={drinks} />
    </section>
  );
}

export default Recipe;
