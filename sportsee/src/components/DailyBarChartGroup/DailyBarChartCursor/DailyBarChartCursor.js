import React from "react";
import { Rectangle } from "recharts"
import PropTypes from "prop-types"

/**
 * Component React that displays the bar chart's cursor of user's daily activities
 * @component
 */
const DailyBarChartCursor = ({ x, y, width, height }) => {
    return (
      <Rectangle
        fill="rgba(196, 196, 196, 0.5)"
        x={x + width / 10}
        y={y}
        width={width / 1.25}
        height={height}
      />
    )
}
  
DailyBarChartCursor.propTypes = {
    /**
     * Recharts props value for 'x' coordinate, calculated internally by Recharts
     */  
    x: PropTypes.number,

    /**
     * Recharts props value for 'y' coordinate, calculated internally by Recharts
     */
    y: PropTypes.number,

    /**
     * Recharts props value for 'width' category, calculated internally by Recharts
     */
    width: PropTypes.number,

    /**
     * Recharts props value for 'width' category, calculated internally by Recharts
     */
    height: PropTypes.number,
}

export default DailyBarChartCursor