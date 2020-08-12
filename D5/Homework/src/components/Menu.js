import React from "react";
import Recipe from "./Recipe";
function Menu({ recipes }) {
  return (
    <article>
      <div className="recipes">
        {recipes.map((recipe, i) => (
          <Recipe key={i} {...recipe} />
        ))}
      </div>
    </article>
  );
}

export default Menu;
