import React from "react";
import { Rectangle } from "recharts";
import PropTypes from "prop-types";

/**
 * Component React that customize the cursor of SimpleLineChart displayed in hover
 * @component
 * @param {Array} points Recharts props value containing 'x' and 'y' coordinates for lines points
 * @returns The cursor's customization in simple line chart
 */
const SimpleLineCursor = ({ points }) => {
  return (
    <Rectangle
      fill="#000000"
      fillOpacity={0.2}
      x={points[1].x}
      width={1000}
      height={300}
    />
  )
}

SimpleLineCursor.propTypes = {
  /**
   * Recharts props value containing 'x' and 'y' coordinates for lines points, calculated internally by Recharts
   */
  points: PropTypes.array,
}

export default SimpleLineCursor
