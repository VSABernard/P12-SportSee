import React from "react"
import PropTypes from "prop-types"

import "../CardInfos/CardInfos.css"

import calories from "../../assets/calories-icon.png"
import proteins from "../../assets/protein-icon.png"
import carbohydrates from "../../assets/carbs-icon.png"
import lipids from "../../assets/fat-icon.png"

/**
 * Component React that displays the key information of a user in the form of a card
 * @component
 * @param {Object} keyData User's key informations of health
 * @returns The user's key information card
 */

const CardInfos = ({keyData}) => {

  /**
   * Constant inside keyData
   * @constant
   * @type {number}
   */

  const {calorieCount, proteinCount, carbohydrateCount, lipidCount } = keyData

  return (
    <div className="blockCardInfos">
      <div className="iconCardCalories">
        <img className="iconCard" src={calories} alt="Calories icon" />
        <div className="cardValues">
          <div className="keyDataValue">{calorieCount.toLocaleString("en-US")}kCal</div>        {/* format a number from 1234 into 1,234 */}
          <p>Calories</p>
        </div>
      </div>
      <div className="iconCardProteins">
        <img className="iconCard" src={proteins} alt="Proteins icon" />
        <div className="cardValues">
          <div className="keyDataValue">{proteinCount}g</div>
          <p>Proteines</p>
        </div>
      </div>
      <div className="iconCardCarbohydrates">
        <img className="iconCard" src={carbohydrates} alt="Carbohydrates icon" />
        <div className="cardValues">
          <div className="keyDataValue">{carbohydrateCount}g</div>
          <p>Glucides</p>
        </div>
    </div>
      <div className="iconCardLipids">
        <img className="iconCard" src={lipids} alt="Lipids icon" />
        <div className="cardValues">
          <div className="keyDataValue">{lipidCount}g</div>
          <p>Lipides</p>
        </div>
      </div>
    </div>  
  )
}

CardInfos.propTypes = {
  /**
   * User's data
   */
  keyData: PropTypes.object,
}

export default CardInfos