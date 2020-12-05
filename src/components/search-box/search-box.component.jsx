import React from 'react';

import './search-box.styles.css';

export function SearchBox({ placeholder, handleChange }) {
    return (
        <input
            type='search'
            placeholder={placeholder}
            onChange={handleChange}
        />
    );
}
