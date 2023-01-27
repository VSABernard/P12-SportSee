import React from "react"
import PropTypes from "prop-types"

import '../SimpleLineTooltip/SimpleLineTooltip.css'

const SimpleLineTooltip = ({ payload }) => {
  if (payload[0] !== undefined) {
    return (
      <div>
        <p className='simple-tooltip'>{payload[0].value + 'min'}</p>
      </div>
    )
  }
}

SimpleLineTooltip.propTypes = {
  payload: PropTypes.array,
}

export default SimpleLineTooltip