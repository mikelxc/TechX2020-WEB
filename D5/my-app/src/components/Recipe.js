import React from 'react'
import IngredientsList from './IngredientsList'
import Instructions from "./Instructions"

function Recipe({ name, ingredients, steps}) {
    return(
        <section>
            <h1>{name}</h1>
            <IngredientsList list = {ingredients}/>
            <Instructions title = "Cooking Insturcionts" steps = {steps}/>
        </section>
    )
}
export default Recipe;