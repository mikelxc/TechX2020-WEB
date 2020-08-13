import React from 'react';
import { Link } from '@reach/router';
import trefle from '../../../trefle.svg';
import './SearchBar.css';

const SearchBar = ({ inputValue, onChange }) => {
    const handleChange = (e) => {
        onChange(e.target.value);
    }
    return (
        <div className="search-bar">
            <Link to="/">
                <img src={trefle} alt="trefle logo"></img>
            </Link>
            <input id = "top-input" type="text" onChange={handleChange} value={inputValue} />
        </div>
    );
};

export default SearchBar;