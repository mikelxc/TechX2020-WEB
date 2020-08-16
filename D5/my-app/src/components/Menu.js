import React from 'react';
import Recipe from "./Recipe";
import Click from "./Click";
import State from "./State";

function Menu({recipes}){
    return(
        <article>
            <State/>
            <Click/>
            <header>
                <h1>TechX Web Recipes</h1>
            </header>
            <div className = "recipes">
                {recipes.map((recipe, i) => (
                    <Recipe key ={i} {...recipe}/>
                ))}
            </div>
            {/* <Recipe name="Dingxianlou"/> */}
        </article>
        
    );
}

export default Menu;