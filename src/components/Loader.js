import React from 'react';
import "./Loader.css"

function Loader() {
    return (
        <div className='loader'>
            <svg>
                <circle cx="70" cy="70" r="70"></circle>
            </svg>
        </div>
    )
}

export default Loader
