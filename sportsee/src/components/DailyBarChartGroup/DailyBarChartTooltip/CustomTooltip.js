import React from 'react'
import '../DailyBarChartTooltip/CustomTooltip.css'

const CustomTooltip = ({ active, payload }) => {
    if ( active && payload && payload.length ) {
        return (
            <div className='tooltip-activity'>
                <p className='tooltip-activity-weight'>{`${payload[0].value}Kg`}</p>
                <p className='tooltip-activity-calorie'>{`${payload[0].value}kCal`}</p>
            </div>
        )
    }
    return null
}

export default CustomTooltip