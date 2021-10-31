import React from 'react'
import PropType from 'prop-types';

export const GifGridItem = ( { title, url } ) => {

    //console.log ({id, title, url});

    return (
        <div className = "card animate__animated animate__bounce animate__fadeIn">
            <img src={ url } alt = { title }></img>
            <p> { title } </p>
            {/* { title } */}
        </div>
    )
}

GifGridItem.propType = {
    title: PropType.string.isRequired,
    url: PropType.string.isRequired
                 
}