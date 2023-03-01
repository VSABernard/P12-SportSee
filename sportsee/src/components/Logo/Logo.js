import React from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import "../Logo/Logo.css"

/**
 * Component React that displays the logo of Sportsee
 * @component 
 * @returns Sportsee's logo
 */
const Logo = () => {
  return (    
    <Link className="logo" to="/" >
        <img src={logo} alt="running man logo" />
    </Link>
  )
}

export default Logo