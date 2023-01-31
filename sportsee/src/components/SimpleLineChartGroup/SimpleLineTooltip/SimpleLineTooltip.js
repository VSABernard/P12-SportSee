import React from "react"
import PropTypes from "prop-types"

import '../SimpleLineTooltip/SimpleLineTooltip.css'

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