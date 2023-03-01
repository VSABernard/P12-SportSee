import React from "react"
import PropTypes from "prop-types"

import '../SimpleLineTooltip/SimpleLineTooltip.css'

/**
 * Component React that displays the tooltip of simple line chart 
 * @param {Boolean} active To display the tooltip when it's set true and vice versa
 * @param {Array} payload The source data of the content to be displayed in the tooltip
 * @returns The simple line chart's tooltip
 */
const SimpleLineTooltip = ({ active, payload }) => {
  if ( active && payload && payload.length ) {
      return (
          <div className='simpleTooltip-activity'>
              <p className='tooltip-activity-weight'>{`${payload[0].value}min`}</p>
          </div>
      )
  }
  return null
}

SimpleLineTooltip.propTypes = {
  payload: PropTypes.array,
}

export default SimpleLineTooltip