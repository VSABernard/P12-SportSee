import React from "react"
import PropTypes from "prop-types"

import '../DailyBarChartLegend/DailyBarChartLegend.css'

const DailyBarChartLegend = ({ payload }) => {
  return (
    <figcaption className="barChart-header">
      <h2>Activité quotidienne</h2>
      <ul className="barChart-legend">
        {payload.map((entry, index) => (
          <li key={`itemLegend-${index}`}>
            {entry.dataKey === "kilogram" ? (
              <span className="iconLegend-kilogram"></span>
            ) : (
              <span className="iconLegend-calories"></span>
            )}
            {entry.value}
          </li>
        ))}
      </ul>
    </figcaption>
  )
}

DailyBarChartLegend.propTypes = {
  /**
   * Recharts props value containing user's activity data used for the bar chart and internally formatted by Recharts
   */
  payload: PropTypes.array,
}

export default DailyBarChartLegend;