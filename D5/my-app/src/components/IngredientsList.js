import React from 'react';

export default function IngredientsList({list}) {
    return(
        <ul className="ingredients">
            {list.map((ingredient, i) => (
                <Ingredients key={i} {...ingredient}/>
            ))}
        </ul>
    );
}