import React from 'react'
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts'


import '../RadialBarChart/RadialBarChart.css'

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

    return (
        <div className='radialbar'>
            <h3>Score</h3>
            <div className='score-percentage'>
                <h4>{data.value}%</h4>
                <p>de votre objectif</p>
            </div>
            <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart cx="50%" cy="50%" innerRadius="55%" outerRadius="73%" 
                            barSize={20} barCategoryGap={0} data={datas}
                            startAngle={90} endAngle={450} fill="#FF0000">
            <circle cx="50%" cy="55%" fill="white" r="90"></circle>
            <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />                    
            <RadialBar
                minAngle={15} dataKey="value"
                background={false} cornerRadius={10} />            
            </RadialBarChart>
        </ResponsiveContainer>
        </div>
    )
}

export default ScoreBarChart