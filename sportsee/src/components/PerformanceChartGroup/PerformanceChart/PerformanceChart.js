import React from 'react';
import PropTypes from "prop-types";
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
                <RadarChart innerRadius="5%" outerRadius="50%" 
                            data={performances} 
                            startAngle={-150} endAngle={210}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis tickLine={false} tickSize={13}
                                dy={3} tick={{ fill: "#FFFFFF", fontSize: "12px", fontWeight: "500" }} 
                                dataKey="subject" />
                    <PolarRadiusAxis axisLine={false} tickCount={5} tick={false} />
                    <Radar dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

PerformanceChart.propTypes = {
    /**
     * Array containing objects with data values and french labels of each perfomance's category
     */
    dataPerf: PropTypes.array,
  }

export default PerformanceChart