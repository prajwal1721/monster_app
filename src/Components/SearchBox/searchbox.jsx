import React from 'react';
import './searchbox.css';
export const SearchBox=({handleChange})=>{
    return (
        <input type='search' placeholder='search monsters'  onChange={handleChange}/>   
    );
}