import React from "react"
import '../Loader/Loader.css'

/**
 * Component React that displays a loader during the call of data
 * @component 
 */
function Loader () {
    return (
        <div className="loader-container">
            <div className="loading-spinner">
            </div>
        </div>        
    )
}

export default Loader