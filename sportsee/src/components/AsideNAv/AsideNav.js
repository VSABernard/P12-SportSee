import React from "react"
import { NavLink } from 'react-router-dom'
import yogaIcon from "../../assets/yoga-icon.png"
import swimmIcon from "../../assets/swimm-icon.png"
import bikeIcon from "../../assets/bike-icon.png"
import gymIcon from "../../assets/gym-icon.png"
import "./AsideNav.css"

/**
 * Component React that displays vertical navigation bar with icons and copyright
 * @component
 * @returns The vertical navigation bars of the app
 */

const AsideNav = () => {
  return (
    <div className="iconNavList">
      <ul className="iconNav-block">
        <NavLink to='' className="iconNav">
          <img src={yogaIcon} alt="yoga icon" />
        </NavLink>
        <NavLink to='' className="iconNav">
          <img src={swimmIcon} alt="swim icon" />
          </NavLink>
        <NavLink to='' className="iconNav">
          <img src={bikeIcon} alt="bike icon" />
          </NavLink>
        <NavLink to='' className="iconNav">
          <img src={gymIcon} alt="gym icon" />
        </NavLink>
      </ul>
      <p className="copyright">Copyright, SportSee 2020</p>
    </div>        
  )
}

export default AsideNav