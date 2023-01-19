import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DailyBarChart = ({sessions}) => {
  
    sessions = sessions.map(session => {
        session.day = session.day.slice(-1) // only the last 2 characters ( day DD of the date YYYY-MM-DD)
        return session 
    })

    return (


        <BarChart 
            width={500}
            height={300}
            data={sessions}
            margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="kilogram" fill="#282D30" />
            <Bar dataKey="calories" fill="#E60000" />
        </BarChart>
    )
  }

export default DailyBarChart