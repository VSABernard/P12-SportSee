import React from "react"
import PropTypes from "prop-types"
import "../CardInfos/CardInfos.css"
import calories from "../../assets/calories-icon.png"
import proteins from "../../assets/protein-icon.png"
import carbohydrates from "../../assets/carbs-icon.png"
import lipids from "../../assets/fat-icon.png"

const CardInfos = ({keyData}) => {
  const {calorieCount, proteinCount, carbohydrateCount, lipidCount } = keyData
  console.log (calorieCount)

}

export default CardInfos
