import React from "react";
import { Rectangle } from "recharts";
import PropTypes from "prop-types";

const SimpleLineCursor = ({ width, points, padding }) => {
  return (
    <Rectangle
      fill="#000"
      fillOpacity={0.1}
      x={points[0].x - padding}
      width={width}
      height={263}
    />
  )
}

SimpleLineCursor.propTypes = {
  /**
   * Recharts props value for width rectangle, calculated internally by Recharts
   */
  width: PropTypes.number,
  /**
   * Recharts props value containing 'x' and 'y' coordinates for lines points, calculated internally by Recharts
   */
  points: PropTypes.array,
  /**
   * Number value of ticks padding linechart
   */
  padding: PropTypes.number,
}

export default SimpleLineCursor
