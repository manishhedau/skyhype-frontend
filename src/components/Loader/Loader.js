import React from 'react'
import loading from "./loader.gif";
import './loader.css';

function Loader() {
    return (
        <div className="loader">
            <img src={loading} alt="Loading..." />
        </div>
    )
}

export default Loader
