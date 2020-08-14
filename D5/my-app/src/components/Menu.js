import React from "react";
import Recipe from "./Recipe";
import State from "./State";
<<<<<<< HEAD:D5/my-app/src/components/Menu.js
=======
import Click from "./Click";
import StarRating from "./StarRating";

>>>>>>> upstream/master:D5/recipe/src/components/Menu.js
function Menu({ recipes }) {
  return (
    <article>
      <State />
<<<<<<< HEAD:D5/my-app/src/components/Menu.js
=======
      <Click />
>>>>>>> upstream/master:D5/recipe/src/components/Menu.js
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
