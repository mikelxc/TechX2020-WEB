import React from "react";
import Gradient from "./Gradient";
function Menu({ recipes }) {
  return (
    <article>
      <div className="recipes">
        {recipes.map((recipe, i) => (
          <Gradient key={i} {...recipe} />
        ))}
      </div>
    </article>
  );
}

export default Menu;

