import React from 'react';
import Ingredient from "./Ingredient";

export default function IngredientsList({list}){
return(
    <ul className = "Ingredients">
        {list.map((ingredient, i) => (
            <Ingredient key = {i} {...ingredient}/>
            //amount={ingredient.amount} measurement ={ingredient.measurement} name = {ingredient.name}
        ))}
    </ul>
)

}