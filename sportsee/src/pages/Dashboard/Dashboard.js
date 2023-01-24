import React from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom"
// import { useAxios } from 'use-axios-client'

import Error404 from '../Error404/Error404'

import HeaderNav from '../../components/HeaderNav/HeaderNav'
import AsideNav from '../../components/AsideNAv/AsideNav'
import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard'
import CardInfos from '../../components/CardInfos/CardInfos'
import DailyBarChart from '../../components/DailyBarChart/DailyBarChart'

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
  const [ user, setUser ] = React.useState(null)
  const [ activity, setActivity ] = React.useState(null)


  React.useEffect(() => {
    axios.get(baseUrlUser).then((response) => {
      setUser(response.data.data)
    })
  }, [])

  React.useEffect(() => {
    axios.get(baseUrlActivity).then((response) => {
      console.log('reponse:' + JSON.stringify(response))
      setActivity(response.data.data)
    })
  }, [])

  
  return (
    <>
      {user !=null && activity != null &&
        <div className="App">
          <HeaderNav />
          <main className='main'>
            <AsideNav />
            <section className='dashboard'>          
              <HeaderDashboard userInfos={user.userInfos}/>          
              <div className='datasChart'>
                <div className='charts'>
                  <div>
                    <DailyBarChart className='barChart' sessions={activity.sessions}/>
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