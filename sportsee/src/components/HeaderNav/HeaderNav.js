import React from "react"
import { NavLink } from "react-router-dom"
import Logo from "../Logo/Logo"
import "../HeaderNav/HeaderNav.css"

/**
 * Component React which display the navigation's buttons on the header
 * @component
 * @returns The horizontal navigation bars of the app
 */

const HeaderNav = () => {
  return (
    <header className="mainHeader">
      <Logo />
      <ul className="horizontalNav">
        <NavLink className={'navHeader'} to='/'> Accueil </NavLink>
        <NavLink className={'navHeader'} to=' '> Profil </NavLink>
        <NavLink className={'navHeader'} to=' '> Réglage </NavLink>
        <NavLink className={'navHeader'} to=' '> Communauté </NavLink>
      </ul>
    </header>
  )
}

export default HeaderNav