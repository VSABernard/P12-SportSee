import React from 'react'
//import ReactDOM from "react-dom/client"
// import AutoSizer from 'react-virtualized-auto-sizer'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import PropTypes from 'prop-types'

import DailyBarChartLegend from '../DailyBarChartLegend/DailyBarChartLegend'
import CustomTooltip from '../DailyBarChartTooltip/CustomTooltip'

import '../DailyBarChart/DailyBarChart.css'

const DailyBarChart = ({sessions}) => {
  
  let arrayWeight = []

  sessions = sessions.map(session => {
      session.day = session.day.slice(-1) // only the last character ( day DD of the date YYYY-MM-DD)
      arrayWeight.push(session.kilogram)
      return session 
  })

  const minWeight = sessions[0].kilogram
  const maxWeight = sessions[sessions.length - 1].kilogram
  const middleWeight = minWeight + (maxWeight - minWeight) / 2

  return (
    <div className='barChart'>
     <ResponsiveContainer width='100%' aspect={4} >  
        <BarChart className='barChart-wrapper'data={sessions} 
                  margin={{top: 10, right: 20, left: 20, bottom: 40}}
                  wrapperStyle={{left: "0%", right: "20%",top: "0%", bottom: "0%", background: "#FBFBFB", borderRadius: "5px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.0212249)"}}>
          <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={false} dot={false} />
          <XAxis  dataKey="day" type='number' tickCount={sessions.length} domain={["dataMin", "dataMax"]} 
                  tick={{fill:"#9B9EAC"}} stroke="#DEDEDE" 
                  tickLine={false} tickSize={0} 
                  tickMargin={20} padding={{ left: 25, right: 10 }}/>
          <YAxis  dataKey="kilogram" type="number" tick={{fill: "#9B9EAC"}} 
                  tickCount={3} ticks={[minWeight - 1, middleWeight, maxWeight + 1]} tickSize={0} orientation='right' 
                  minTickGap={27} tickMargin={20} tickLine={false} axisLine={false} padding={{bottom: 2, top: 30, left: 10}}/>
          <Tooltip content={<CustomTooltip />} offset={35}
                  wrapperStyle={{ outline: "none", top: "-100px" }}
                  allowEscapeViewBox={{ x: false, y: true }}
                  isAnimationActive={false}/> 
          <Legend content={<DailyBarChartLegend />} iconSize={8} 
                  verticalAlign='top' height={24} width={277}/>
          <Bar    dataKey="kilogram" name="Poids (kg)" 
                  fill="#282D30" barSize={10} radius= {[5, 5, 0, 0]} />
          <Bar    dataKey="calories" name="Calories brulées (kCal)" 
                  fill="#E60000" barSize={10} radius= {[5, 5, 0, 0]} />               
        </BarChart>
     </ResponsiveContainer> 
   </div>
  )
}
   
export default DailyBarChart

 /* 
 Array containing user activity data (weight and calories) for each day
 */
DailyBarChart.propTypes = {
    sessions: PropTypes.array,
}