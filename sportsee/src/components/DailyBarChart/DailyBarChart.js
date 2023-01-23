import React, { PureComponent } from 'react'
import { BarChart, Bar, Cell, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import PropTypes from "prop-types"
import '../DailyBarChart/DailyBarChart.css'

const DailyBarChart = ({sessions}) => {
  
  sessions = sessions.map(session => {
      session.day = session.day.slice(-1) // only the last 2 characters ( day DD of the date YYYY-MM-DD)
      return session 
  })
  
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart height={320} width={835} data={sessions} margin={{top: 5, right: 30, left: 0, bottom: 5}}
                wrapperStyle={{left: "0%", right: "20%",top: "0%", bottom: "0%", background: "#FBFBFB", borderRadius: "5px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.0212249)"}}>
        <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={false} dot={false} />
        <XAxis dataKey="day" tick={{stroke:"#9B9EAC", strokeWidth:0.5}} tickLine={false} tickSize={14} padding={{bottom:10}} margin={{top: ('50% - 24px/2')}} />
        <YAxis orientation='right' tickMargin={40} tickLine={false} axisLine={false} padding={{bottom:2}}/>
        <Tooltip />
        <Legend iconType='circle' iconSize={8} verticalAlign='top' align='right' height={24} />
        <Bar dataKey="kilogram" name="Poids (kg)" fill="#282D30" barSize={7} borderRadius= "5px 5px 0px 0px" />
        <Bar dataKey="calories" name="Calories brulées (kCal)" fill="#E60000" barSize={7} borderRadius= "5px 5px 0px 0px" />            
      </BarChart>
    </ResponsiveContainer>
  )  
}

export default DailyBarChart

DailyBarChart.propTypes = {
    dto: PropTypes.shape({
      dataBars: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.number.isRequired,
          kilogram: PropTypes.number,
          calories: PropTypes.number,
      })
    ),
  }),
}