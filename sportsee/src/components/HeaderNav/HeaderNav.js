import React from "react"
import Logo from "../Logo/Logo"
import "../HeaderNav/HeaderNav.css"

const HeaderNav = () => {
  return (
    <header className="mainHeader">
      <Logo />
      <ul className="horizontalNav">
        <li>Accueil</li>
        <li>Profil</li>
        <li>Réglage</li>
        <li>Communauté</li>
      </ul>
    </header>
  )
}

export default HeaderNav