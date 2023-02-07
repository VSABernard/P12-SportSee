import React from 'react'
import PropTypes from "prop-types"
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

import SimpleLineTooltip from '../SimpleLineTooltip/SimpleLineTooltip'
import SimpleLineCursor from '../SimpleLineCursor/SimpleLineCursor'

import './SimpleLineChart.css'

/**
 * Component React that displays the simple line chart of user's average session duration
 * @component
 * @param {Array} sessions List of activity session
 */
const SimpleLineChart = ({sessions}) => {
   
    let arrayAverage = []

    const daysOfWeek = ["L", "M", "M", "J", "V","S", "D"]    

    sessions = sessions.map(session => {
        session.name = daysOfWeek[session.day-1]
        arrayAverage.push(session.sessionLength)
        return session 
    })

    const Title = () => {
        return <div className="chart-title">Durée moyenne des sessions</div>
    }

    return (
        <div className='simple-line'>
            <LineChart width={250} height={215} 
                        data={sessions} margin={{ top: -40, right: 0, left: 0, bottom: 0 }} >
                <XAxis  dataKey= "name"  type='category'
                        padding={{ left: 10, right: 10 }} axisLine={false}
                        interval={"preserveStartEnd"} fontSize={12}
                        tickLine={false} tick={{ fill: "#FFFFFF", opacity: 0.5 }}
                        tickMargin={20} height={60}/>
                <YAxis  domain={["dataMin -5", "dataMax + 5"]}
                        dataKey="sessionLength" hide={true} />
                <Tooltip content={<SimpleLineTooltip />} offset={5}
                        wrapperStyle={{ outline: "none", top: "-40px" }}
                        isAnimationActive={false} cursor={<SimpleLineCursor />} /> 
                <Legend verticalAlign="top" align="left" content={Title} />
                <Line   type="monotone" dataKey="sessionLength" stroke="#FFFFFF" padding={{top: 0}}
                        dot={false} strokeWidth={2} activeDot={{ stroke: "white", r: 4 }} />
            </LineChart> 
      </div>
    )
}

SimpleLineChart.propTypes = {
    /**
     * Array containing user sessions duration's data for each week's day
     */
    sessions: PropTypes.array,
  }

export default SimpleLineChart
  