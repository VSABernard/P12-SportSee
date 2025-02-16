import React from 'react'
import PropTypes from 'prop-types'
import '../DailyBarChartTooltip/CustomTooltip.css'

/**
 * Component React that displays the tooltip of bar chart
 * @param {Boolean} active To display the tooltip when it's set true and vice versa
 * @param {Array} payload The source data of the content to be displayed in the tooltip
 * @returns The bar chart's tooltip
 */
const CustomTooltip = ({ active, payload }) => {
    if ( active && payload && payload.length ) {
        return (
            <div className='tooltip-activity'>
                <p className='tooltip-activity-weight'>{`${payload[0].value}Kg`}</p>
                <p className='tooltip-activity-calorie'>{`${payload[1].value}kCal`}</p>
            </div>
        )
    }
    return null
}

CustomTooltip.propTypes = {
    /**
     * Recharts props value containing user's activity data used for the bar chart and internally formatted by Recharts
     */
    payload: PropTypes.array,
  }

export default CustomTooltip