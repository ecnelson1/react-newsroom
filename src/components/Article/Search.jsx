import React from 'react'
import PropTypes from 'prop-types'

function Search({keyword, onKeywordChange, onSubmit}) {
    return (
        <form aria-label="search-form" onSubmit={onSubmit}>
            <label>Keyword Search</label>
            <input
            type="text"
            value={keyword}
            onChange={onKeywordChange}
            aria-label="Search"/>
            <button aria-label='Submit'>Search!</button>
        </form>
        );
    }
    
Search.propTypes = {
    onKeywordChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default Search
