import React from "react";
import Recipe from "./Recipe";
import State from "./State";
import Click from "./Click";
import StarRating from "./StarRating.js";

function Menu({ recipes }) {
  return (
    <article>
      <State />
      <Click />
      <header>
        <h1>Delicious Recipes</h1>
      </header>
      <div className="recipes">
        {recipes.map((recipe, i) => (
          <Recipe key={i} {...recipe} />
        ))}
        <StarRating />
      </div>
    </article>
  );
}

export default Menu;