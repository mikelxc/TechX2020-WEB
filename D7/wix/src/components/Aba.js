import React from "react";

export default function Aba({obj}){
    return(
        <div>
            <h1>Class name: {obj.classname}</h1>
            <p>Start from {obj.startDate} to {obj.endDate}</p>
        </div>
    
    );
}