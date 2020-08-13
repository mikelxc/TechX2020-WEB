import React, { useState } from 'react';
import { navigate } from '@reach/router';
import trefle from '../../trefle.svg';
import './Home.css';

const Home = () => {
    const [input, setInput] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search?query=${encodeURIComponent(input)}`);
    };
    const handleChange = (e) => {
        setInput(e.target.value);
    };
    return (
        <div className = 'home-container'>
            <img id = "logo" src = {trefle} alt = "trefle logo" />
            <form onSubmit = {handleSubmit}> 
                <input id = "main-input" type = 'text' onChange = {handleChange}></input>
                <button id = "submit" type = "submit">Search</button>
            </form>
        </div>
    );
}

export default Home;