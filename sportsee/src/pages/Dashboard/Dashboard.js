import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

import { getUserActivity, getUserData, getUserAverage, getUserPerformance } from '../../service/Service'

import Loader from '../../components/Loader/Loader'
import Error404 from '../Error404/Error404'


import HeaderNav from '../../components/HeaderNav/HeaderNav'
import AsideNav from '../../components/AsideNAv/AsideNav'
import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard'
import CardInfos from '../../components/CardInfos/CardInfos'
import DailyBarChart from '../../components/DailyBarChartGroup/DailyBarChart/DailyBarChart' 
import SimpleLineChart from '../../components/SimpleLineChartGroup/SimpleLineChart/SimpleLineChart'
import PerformanceChart from '../../components/PerformanceChart/PerformanceChart'
import ScoreBarChart from '../../components/RadialBarChart/RadialBarChart'

import '../Dashboard/Dashboard.css'

/**
 * Function React that displays the dashboard's page of the app
 * @function 
 * @returns Dashboard of the website
 */
function Dashboard()  {

  useEffect(() => {
    window.scrollTo(0,0)                                         /* On load, the page is displayed at its top */  
  })

  const params = useParams()
  const id = params.userId

  const [isLoading, setIsLoading] = useState(true) 
  const [errorMessage, setErrorMessage] = useState("")
  const [counterLoading, setCounterLoading] = useState (0)  
  
  const [ user, setUser ] = React.useState(null)
  const [ activity, setActivity ] = React.useState(null)
  const [ average, setAverage ] = React.useState(null)
  const [ performance, setPerformance ] = React.useState(null)

  /*
  * To retrieve the URLs to access the data via the corresponding route
  * Error handling is handled by the CATCH at the promise level
  */

  React.useEffect(() => {  
    async function fetchUserData (id) {
      let userData = await getUserData(id)
      if ( userData != null ) {
        setUser(userData)
        setCounterLoading((counterLoading)=>counterLoading+1)
      } else {
        setErrorMessage('Error on GET user')
        setIsLoading(false)
        console.error('Error on GET user')        
      }
    }    
  fetchUserData(id)      
  }, [id])

  React.useEffect(() => {
    async function fetchUserActivity (id) {
      let useActivity = await getUserActivity(id)
      if ( useActivity != null ) {
        setCounterLoading((counterLoading)=>counterLoading+1)
        setActivity(useActivity) 
      } else {
        setErrorMessage('Error on GET activity')
        setIsLoading(false)
        console.error('Error on GET activity')
      }
    }
    fetchUserActivity(id)
  }, [id])

  React.useEffect(() => {
    async function fetchUserAverage (id) {
      let useAverage = await getUserAverage(id)
      if ( useAverage != null ) {
        setCounterLoading((counterLoading)=>counterLoading+1)
        setAverage(useAverage) 
      } else {
        setErrorMessage('Error on GET activity')
        setIsLoading(false)
        console.error('Error on GET activity')
      }
    }
    fetchUserAverage(id)
  }, [id])

  React.useEffect(() => {
    async function fetchUserPerformance (id) {
      let usePerformance = await getUserPerformance(id)
      if ( usePerformance != null ) {
        setCounterLoading((counterLoading)=>counterLoading+1)
        setPerformance(usePerformance) 
      } else {
        setErrorMessage('Error on GET performance')
        setIsLoading(false)
        console.error('Error on GET performance')
      }
    }
    fetchUserPerformance(id)
  }, [id])

  React.useEffect(() => {
    if(counterLoading > 3){
      setIsLoading(false)
    }
  },[counterLoading])
 
  if(errorMessage){
    return (<Error404 />)
  }
  if(isLoading){
    return (<Loader />)
  } else {
  return (
  <>
    {
      <div className="App">
        <HeaderNav />
        <main className='main'>
          <AsideNav />
          <section className='dashboard'>          
            <HeaderDashboard userInfos={user.userInfos}/>          
            <div className='datasChart'>
              <div className='charts'>
                <DailyBarChart className='barChart' sessions={activity.sessions}/>
                <div className='second-line-charts'>
                    <SimpleLineChart className='simpleChart' sessions={average.sessions}/>  
                    <PerformanceChart className='performanceChart' datas={performance}/>
                    <ScoreBarChart className='scoreChart' user={user} />
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
  </> )}
}

export default Dashboard