import React from 'react'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts'

import '../RadialBarChartGroup/RadialBarChart.css'

const ScoreBarChart = ({user}) => {
    
    let datas = []
    let score = 0

    if(user['score'] != null) {
        score = user.score
    }
    if(user['todayScore'] != null){
        score = user.todayScore
    }
    let data = {
        value : score*100  
    }
    datas.push(data)

    console.log('data:' + JSON.stringify(datas))
    return (
        <div className='radialbar'>
            <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={datas}>
            <RadialBar
                minAngle={15}
                label={{ position: 'insideStart', fill: '#f00' }}
                background
                clockWise
                dataKey="value"
            />
            <Legend iconSize={10} layout="vertical" verticalAlign="middle" />
            </RadialBarChart>
        </ResponsiveContainer>
        </div>
    )
}

export default ScoreBarChart