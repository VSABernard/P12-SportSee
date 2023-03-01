import React from 'react'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import PropTypes from 'prop-types'

import DailyBarChartLegend from '../DailyBarChartLegend/DailyBarChartLegend'
import CustomTooltip from '../DailyBarChartTooltip/CustomTooltip'
import DailyBarChartCursor from '../DailyBarChartCursor/DailyBarChartCursor'

import '../DailyBarChart/DailyBarChart.css'

/**
 * Component React that displays the bar chart of user's daily activities
 * @component
 * @param {Array} sessions Daily activity's session
 * @returns The user's daily activities bar chart 
 */
const DailyBarChart = ({sessions}) => {
  
  /**
   * Collect the array of user's weight
   * @inner
   * @constant
   * @type {Array}
   */
  let arrayWeight = []

  sessions = sessions.map(session => {
      session.day = session.day.slice(-1) // only the last character ( day DD of the date YYYY-MM-DD)
      arrayWeight.push(session.kilogram)
      return session 
  })

  /**
   * Collect the minimal data weight value to define BarChart's ticks value
   * @inner
   * @type {number}
   */
  let minWeight = sessions[0].kilogram

  /**
   * Collect the maximal data weight value to define BarChart's ticks value
   * @type {number}
   */
  let maxWeight = sessions[sessions.length-1].calories

  /**
   * Calculate the average data weight value to define BarChart's ticks value
   * @type {number}
   */
  let middleWeight = minWeight + (maxWeight - minWeight) / 2

  return (
    <div className='barChart'>
     <ResponsiveContainer width='100%' height= '100%'>  
        <BarChart className='barChart-wrapper'data={sessions} 
                margin={{top: 60, right: 0, left: 20, bottom: 10}} 
                wrapperStyle={{left: "0%", right: "20%",top: "0%", bottom: "0%", background: "#FBFBFB", borderRadius: "5px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.0212249)"}}>
          <CartesianGrid strokeDasharray="3" horizontal={true} vertical={false} dot={true} />
          <XAxis dataKey="day" type='number' tickCount={sessions.length} domain={["dataMin", "dataMax"]} 
                tick={{fill:"#9B9EAC"}} stroke="#DEDEDE" tickSize={0} fontSize={12}
                tickMargin={10} padding={{ left: 15, right: 10 }} />
          <YAxis dataKey="kilogram" type="number" tick={{fill: "#9B9EAC"}} 
                axisLine={false} orientation='right' interval={0}
                minTickGap={0} tickMargin={15} tickLine={false} tickCount={5} 
                fontSize={12} padding={{bottom: -11, top: 0, left: 10}} 
                domain={["dataMin-100", "dataMax+1"]} ticks={[minWeight, middleWeight, maxWeight]} />         
          <YAxis dataKey="calories" type="number" hide={true}
                yAxisId="left" orientation="left" tickCount={3} 
                domain={["dataMin - 1", (dataMax) => dataMax + 10]} /> 
          <Tooltip content={<CustomTooltip /> } offset={45}
                wrapperStyle={{ outline: "none", top: "-170px" }}
                allowEscapeViewBox={{ x: false, y: true }}
                cursor={<DailyBarChartCursor />} isAnimationActive={false}/>  
          <Legend content={<DailyBarChartLegend />} iconSize={8} 
                verticalAlign='top' align='right' height={24} />
          <Bar  dataKey="kilogram" name="Poids (kg)" 
                fill="#282D30" barSize={10} radius= {[5, 5, 0, 0]} />
          <Bar  dataKey="calories" name="Calories brulées (kCal)"
                fill="#E60000" barSize={10} radius= {[5, 5, 0, 0]} />               
        </BarChart>
     </ResponsiveContainer> 
   </div>
  )
}
   
export default DailyBarChart

/**
 * Array containing user activity data (weight and calories) for each day
 */
DailyBarChart.propTypes = {
    sessions: PropTypes.array,
}