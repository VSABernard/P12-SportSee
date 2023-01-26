import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import '../SimpleLineChart/SimpleLineChart.css'

const SimpleLineChart = (sessions) => {

    let arraySession = []

    sessions = sessions.map(session => {
        session.day = session.day.slice(1) // only the last character ( day DD of the date YYYY-MM-DD)
        arraySession.push(session.sessionLength)
        return session 
    })

    const Title = () => {
        return <div className="rechart-title">Durée moyenne des sessions</div>
    }

    return (
        <div className='simple-line'>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sessions} margin={{ top: 0, right: 0, left: 0, bottom: 10 }} >
                    <CartesianGrid strokeDasharray="3 3" />
                    <defs>
                        <linearGradient id="colorUv" x1="1" y1="1" x2="0" y2="1">
                            <stop offset="5%" stopColor="#FFFFFF" stopOpacity={1} />
                            <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.4} />
                        </linearGradient>
                    </defs>
                    <XAxis  dataKey="day" type="category" 
                            padding={{ left: 10, right: 10 }} axisLine={false}
                            interval={"preserveStartEnd"} fontSize={12}
                            tickLine={false} tick={{ fill: "#FFFFFF", opacity: 0.5 }}
                            textAnchor="middle" />
                    <YAxis  domain={["dataMin -10", "dataMax + 30"]}
                            dataKey="sessionLength" hide={true} />
                    <Tooltip />
                    <Legend verticalAlign="top" align="left" content={Title} />
                    <Line   type="basis" dataKey="sessionLength" stroke="#FFFFFF"
                            dot={false} strokeWidth={2} activeDot={{ stroke: "white", r: 8 }} />
                </LineChart>
        </ResponsiveContainer>
      </div>
    )
}

export default SimpleLineChart
  