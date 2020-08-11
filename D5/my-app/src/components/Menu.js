import React from 'react';

function Menu({ recipes }) {
    return (
    <article>
        <header>
        <h1>TechX Web Recipes</h1>
        </header>
        <div className="recipes">
            {recipes.map((recipes, i) => <Recipe key={i} {...recipes} />)}
        </div>
    </article>
    );
}

export default Menu;
