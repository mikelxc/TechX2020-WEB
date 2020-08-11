import React from "react";
import Recipe from "./Recipe";
import State from "./state";
function Menu({ recipes }) {
  return (
    <article>
      <State />
      <header>
        <h1>Delicious Recipes</h1>
      </header>
      <div className="recipes">
        {recipes.map((recipe, i) => (
          <Recipe key={i} {...recipe} />
        ))}
      </div>
    </article>
  );
}

export default Menu;
