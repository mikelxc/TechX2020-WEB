import React, { useState } from "react";
import IngredientsList from "./IngredientsList";

function Recipe({ name, drinks, steps }) {
  const [isPink, setIsPink] = useState(true);
  return (
    <section id={name.toLowerCase().replace(/ /g, "-")}
      onClick={() => setIsPink(!isPink)}
      style={{ background: isPink ? "linear-gradient(to bottom, pink, white)" : "linear-gradient(to bottom, purple, white)" }}
    >
      <h1 id="title">{name}</h1>
      <IngredientsList list={drinks} />
    </section>
  );
}

export default Recipe;
