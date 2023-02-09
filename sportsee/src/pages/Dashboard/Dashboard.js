import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom"

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
 * Function React that displays the dashboard's page of the website
 * @function 
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

  const baseUrlUser = `http://localhost:3000/user/${id}`
  const baseUrlActivity = `http://localhost:3000/user/${id}/activity`
  const baseUrlAverage = `http://localhost:3000/user/${id}/average-sessions`
  const baseUrlPerformance = `http://localhost:3000/user/${id}/performance`
  
  const [ user, setUser ] = React.useState(null)
  const [ activity, setActivity ] = React.useState(null)
  const [ average, setAverage ] = React.useState(null)
  const [ performance, setPerformance ] = React.useState(null)

  /*
  * To retrieve the URLs to access the data via the corresponding route
  * Error handling is handled by the CATCH at the promise level
  */

  React.useEffect(() => {   
    let timer = null

    axios.get(baseUrlUser)
      .then((response) => {
        timer = setTimeout(() => {
          setUser(response.data.data)
          setCounterLoading((counterLoading)=>counterLoading+1)
        }, 1000)})

      .catch((error) => {       
        setErrorMessage('Error on GET user:', error)
        setIsLoading(false)
        console.error('Error on GET user:', error)
      })

      return () => clearTimeout(timer)
  }, [baseUrlUser])

  React.useEffect(() => {
    axios.get(baseUrlActivity)
      .then((response) => {      
        setCounterLoading((counterLoading)=>counterLoading+1)
        setActivity(response.data.data)})  

      .catch((error) => {        
        setErrorMessage('Error on GET activity:', error)
        setIsLoading(false)
        console.error('Error on GET activity:', error)
      })
  }, [baseUrlActivity])

  React.useEffect(() => {
    axios.get(baseUrlAverage)
    .then((response) => {
      setCounterLoading((counterLoading)=>counterLoading+1)
      setAverage(response.data.data)})

      .catch((error) => {
        setErrorMessage('Error on GET average:', error)
        setIsLoading(false)        
        console.error('Error on GET average:', error)
      })
  }, [baseUrlAverage])

  React.useEffect(() => {
    axios.get(baseUrlPerformance)
    .then((response) => {  
      setCounterLoading((counterLoading)=>counterLoading+1)
      setPerformance(response.data.data)})

      .catch((error) => {        
        setErrorMessage('Error on GET performance:', error)
        setIsLoading(false)
        console.error('Error on GET performance:', error)
      })
  }, [baseUrlPerformance])

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