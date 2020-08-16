import React from 'react';

export default function Instructions({title, steps}){
    return(
        <section className = "instructions">
            <h3>{title}</h3>
            {steps.map((s, i) =>(
                <p key ={i}>{s}</p>
            ))}
        </section>
    )
}