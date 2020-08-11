import React from 'react';
import IngredientsList from './IngredientsList'
function Recipe({name, ingredients, steps}){
    return(
        <section>
            <h1>{name}</h1>
            <IngredientsList list={ingredients}/>
        </section>
    );
}

export default Recipe;