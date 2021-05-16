import React from 'react'
import PropTypes from 'prop-types'

function Article({title, author, description, url }) {
    return (
        <div>
            <li key={url}>
                <h1>{title}</h1>
                <h3>{author}</h3>
                <p>{description}</p>
                <a>{url}</a>
            </li>   
        </div>
    )
}

Article.propTypes = {
title: PropTypes.string.isRequired,
author: PropTypes.string.isRequired,
description: PropTypes.string.isRequired,
url: PropTypes.string.isRequired,
};

export default Article


