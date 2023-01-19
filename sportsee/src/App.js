import React from 'react'
import './App.css'
import HeaderNav from '../src/components/HeaderNav/HeaderNav'
import AsideNav from './components/AsideNAv/AsideNav'
import HeaderDashboard from './components/HeaderDashboard/HeaderDashboard'
import CardInfos from './components/CardInfos/CardInfos'
import {USER_MAIN_DATA} from '../src/data/dataMocker'

function App() {
  const user = USER_MAIN_DATA[1]

  return (
    <div className="App">
      <HeaderNav />
      <main className='main'>
        <AsideNav />
        <section className='dashboard'>
          <HeaderDashboard userInfos={user.userInfos}/>
          <div className='datasChart'>
            <ul className="elementList">              
                <CardInfos key={user.id} keyData={user.keyData} />
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App;
