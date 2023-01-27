import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import SimpleLineTooltip from '../SimpleLineTooltip/SimpleLineTooltip'
import SimpleLineCursor from '../SimpleLineCursor/SimpleLineCursor';

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
            <ResponsiveContainer width="100%" aspect={10} >
                <LineChart data={sessions} margin={{ top: 0, right: 0, left: 0, bottom: 10 }} >
                    <XAxis  dataKey= "name"  type='category'
                            padding={{ left: 5, right: 5 }} axisLine={false}
                            interval={"preserveStartEnd"} fontSize={12}
                            tickLine={false} tick={{ fill: "#FFFFFF", opacity: 0.5 }}
                            tickMargin={80}/>
                    <YAxis  domain={["dataMin 0", "dataMax + 60"]}
                            dataKey="sessionLength" hide={true} />
                    {/* <Tooltip content={<SimpleLineTooltip />} offset={12}
                            wrapperStyle={{ outline: "none", top: "-40px" }}
                            isAnimationActive={false}
                            cursor={<SimpleLineCursor />} /> */}
                    <Legend verticalAlign="top" align="left" content={Title} />
                    <Line   type="monotone" dataKey="sessionLength" stroke="#FFFFFF" padding={{top: 60}}
                            dot={false} strokeWidth={2} activeDot={{ stroke: "white", r: 8 }} />
                </LineChart>
        </ResponsiveContainer>
      </div>
    )
}

export default SimpleLineChart
  