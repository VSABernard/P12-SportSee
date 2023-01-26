import React from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom"
// import { useAxios } from 'use-axios-client'

// import Error404 from '../Error404/Error404'

import HeaderNav from '../../components/HeaderNav/HeaderNav'
import AsideNav from '../../components/AsideNAv/AsideNav'
import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard'
import CardInfos from '../../components/CardInfos/CardInfos'
import DailyBarChart from '../../components/DailyBarChartGroup/DailyBarChart/DailyBarChart' 
import SimpleLineChart from '../../components/SimpleLineChartGroup/SimpleLineChart/SimpleLineChart'
import PerformanceChart from '../../components/PerformanceChartGroup/PerformanceChart/PerformanceChart'

// import {USER_MAIN_DATA} from '../../data/dataMocker'
// import {USER_ACTIVITY} from '../../data/dataMocker'

import '../Dashboard/Dashboard.css'

function Dashboard()  {
  // const user = USER_MAIN_DATA[0]
  // const sessions = USER_ACTIVITY[0].sessions

  const params = useParams()
  const id = params.userId
  const baseUrlUser = `http://localhost:3000/user/${id}`
  const baseUrlActivity = `http://localhost:3000/user/${id}/activity`
  const baseUrlAverage = `http://localhost:3000/user/${id}/average-sessions`
  const baseUrlPerformance = `http://localhost:3000/user/${id}/performance`
  const [ user, setUser ] = React.useState(null)
  const [ activity, setActivity ] = React.useState(null)
  const [ average, setAverage ] = React.useState(null)
  const [ performance, setPerformance ] = React.useState(null)

  React.useEffect(() => {
    axios.get(baseUrlUser).then((response) => {
      setUser(response.data.data)
    })
  }, [baseUrlUser])

  React.useEffect(() => {
    axios.get(baseUrlActivity).then((response) => {
      setActivity(response.data.data)
    })
  }, [baseUrlActivity])

  React.useEffect(() => {
    axios.get(baseUrlAverage).then((response) => {
      setAverage(response.data.data)
    })
  }, [baseUrlAverage])

  React.useEffect(() => {
    axios.get(baseUrlPerformance).then((response) => {
      console.log('respon:' + JSON.stringify(response.data.data))
      setPerformance(response.data.data)
    })
  }, [baseUrlPerformance])
  
  return (
    <>
      {user !=null && activity != null && average != null && performance != null &&
        <div className="App">
          <HeaderNav />
          <main className='main'>
            <AsideNav />
            <section className='dashboard'>          
              <HeaderDashboard userInfos={user.userInfos}/>          
              <div className='datasChart'>
                <div className='charts'>
                  <div className='first-chart'>
                    <DailyBarChart className='barChart' sessions={activity.sessions}/>
                  </div>
                  <div className='second-line-charts'>
                      <SimpleLineChart className='simpleChart' sessions={average.sessions}/>  
                      <PerformanceChart className='simpleChart' datas={performance}/>
                  </div>
                </div>
                <ul className="energeticInfos">              
                    <CardInfos key={user.id} keyData={user.keyData} />
                </ul>
              </div>
            </section>
          </main>
        </div>
      }   
    </>
    

  )
}

export default Dashboard