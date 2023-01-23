import React from 'react'

import HeaderNav from '../../components/HeaderNav/HeaderNav'
import AsideNav from '../../components/AsideNAv/AsideNav'
import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard'
import CardInfos from '../../components/CardInfos/CardInfos'
import DailyBarChart from '../../components/DailyBarChart/DailyBarChart'

import {USER_MAIN_DATA} from '../../data/dataMocker'
import {USER_ACTIVITY} from '../../data/dataMocker'

import '../Dashboard/Dashboard.css'

function Dashboard() {
  const user = USER_MAIN_DATA[0]
  const sessions = USER_ACTIVITY[0].sessions

  return (
    <div className="App">
      <HeaderNav />
      <main className='main'>
        <AsideNav />
        <section className='dashboard'>          
          <HeaderDashboard userInfos={user.userInfos}/>          
          <div className='datasChart'>
            <div className='charts'>
              <div>
                <DailyBarChart className='barChart' sessions={sessions}/>
              </div>
            </div>
            <ul className="energeticInfos">              
                <CardInfos key={user.id} keyData={user.keyData} />
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Dashboard