import React from "react";
import yogaIcon from "../../assets/yoga-icon.png";
import swimmIcon from "../../assets/swimm-icon.png";
import bikeIcon from "../../assets/bike-icon.png";
import gymIcon from "../../assets/gym-icon.png";
import "./AsideNav.css";

const AsideNav = () => {
  return (
    <ul className="iconNavList">
      <li className="iconNav">
        <img src={yogaIcon} alt="yoga icon" />
      </li>
      <li className="iconNav">
        <img src={swimmIcon} alt="swim icon" />
      </li>
      <li className="iconNav">
        <img src={bikeIcon} alt="bike icon" />
      </li>
      <li className="iconNav">
        <img src={gymIcon} alt="gym icon" />
      </li>
      <p className="copyright">Copyright, SportSee 2020</p>
    </ul>    
  )
}

export default AsideNav