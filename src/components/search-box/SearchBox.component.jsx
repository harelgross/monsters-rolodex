import React from "react";

import './SearchBox.styles.css';

export const SearchBox = (props) => {
return (
    <input  type='search' 
            className='search'
            placeholder={ props.placeholder}
            onChange={ props.handleChange } />
)};