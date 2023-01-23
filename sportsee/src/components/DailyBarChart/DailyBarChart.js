import React, { PureComponent } from 'react'
// import AutoSizer from 'react-virtualized-auto-sizer'
import { BarChart, Bar, Cell, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import PropTypes from 'prop-types'
import '../DailyBarChart/DailyBarChart.css'

const DailyBarChart = ({sessions}) => {
  
  sessions = sessions.map(session => {
      session.day = session.day.slice(-1) // only the last 2 characters ( day DD of the date YYYY-MM-DD)
      return session 
  })
  
  return (
    <div style={{ width: '100%', height: 300 }}>
      <BarChart width={700} height={320} data={sessions} margin={{top: 5, right: 30, left: 0, bottom: 5}}
                wrapperStyle={{left: "0%", right: "20%",top: "0%", bottom: "0%", background: "#FBFBFB", borderRadius: "5px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.0212249)"}}>
        <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={false} dot={false} />
        <XAxis dataKey="day" tick={{stroke:"#9B9EAC", strokeWidth:0.5}} tickLine={false} tickSize={14} padding={{bottom:10}} margin={{top: ('50% - 24px/2')}} />
        <YAxis orientation='right' tickMargin={20} tickLine={false} axisLine={false} padding={{bottom:2, top: 60}}/>
        <Tooltip width={39} height={63} wrapperStyle={{backgroundColor:'#E60000'}} />
        <Legend iconType='circle' iconSize={8} verticalAlign='top' align='right' height={24} width={277} />
        <Bar dataKey="kilogram" name="Poids (kg)" fill="#282D30" barSize={10} radius= {[5, 5, 0, 0]} />
        <Bar dataKey="calories" name="Calories brulées (kCal)" fill="#E60000" barSize={10} radius= {[5, 5, 0, 0]} />               
      </BarChart>
      <p className='barChartText'>Activité quotidienne</p>
    </div>
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