import React from "react";
import Aba from "./Aba";

export default function Wix({classes}){
    return(
        <div>
            <h1>TechX 2020</h1>
            <p>
                {classes.map((obj, i) => (
                    <Aba 
                    key = {i}
                    obj = {obj}
                    />
                ))} 
            </p>
        </div>
    )
}