import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import './SimpleLineChart.css'

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
            <ResponsiveContainer width="60%" aspect={4} >
                <LineChart data={sessions} margin={{ top: 0, right: 0, left: 0, bottom: 10 }} >
                    {/* <defs>
                        <linearGradient id="colorUv" x1="1" y1="1" x2="0" y2="1">
                            <stop offset="5%" stopColor="#FFFFFF" stopOpacity={1} />
                            <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.4} />
                        </linearGradient>
                    </defs> */}
                    <XAxis  dataKey= "name"  
                            padding={{ left: 10, right: 10 }} axisLine={false}
                            interval={"preserveStartEnd"} fontSize={12}
                            tickLine={false} tick={{ fill: "#FFFFFF", opacity: 0.5 }}
                            textAnchor="middle" />
                    <YAxis  domain={["dataMin 0", "dataMax + 60"]}
                            dataKey="sessionLength" hide={true} />
                    <Tooltip />
                    <Legend verticalAlign="top" align="left" content={Title} />
                    <Line   type="monotone" dataKey="sessionLength" stroke="#FFFFFF"
                            dot={false} strokeWidth={2} activeDot={{ stroke: "white", r: 8 }} />
                </LineChart>
        </ResponsiveContainer>
      </div>
    )
}

export default SimpleLineChart
  