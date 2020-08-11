import React,{useState, useEffect} from 'react';

function click(){
    const[count,setCount]=useState(0)

    useEffect(()=>{
        <title>{count}</title>
    }
    return (
        <div>
            <p>you clicked me {count} times</p>
            <button onclick={(=>setCount(count++)}></button>
        </div>
    )
}