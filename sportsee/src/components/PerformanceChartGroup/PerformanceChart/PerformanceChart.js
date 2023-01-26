import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

import '../PerformanceChart/PerformanceChart.css'

const PerformanceChart = ({datas}) => {
  
    const types = {
        1 : 'Cardio',
        2 : 'Energie',
        3 : 'Endurance',
        4 : 'Force',
        5 : 'Vitesse',
        6 : 'Intensité'
    }

    let performances = []

    for(let data of datas.data){
        let performance = {}
        performance.subject = types[data.kind]          /* to reach the value of the types */
        performance.value = data.value
        performances.push(performance)
    }
  
    return (
        <div className='performance-chart' >
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={performances}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis />
                    <Radar dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default PerformanceChart