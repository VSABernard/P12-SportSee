import React from 'react'
import './App.css'
import HeaderNav from '../src/components/HeaderNav/HeaderNav'
import AsideNav from './components/AsideNAv/AsideNav'
import HeaderDashboard from './components/HeaderDashboard/HeaderDashboard'
// import CardInfos from './components/CardInfos/CardInfos'
// import { keydata } from '../src/data/dataMocker'
// import USER_MAIN_DATA from '../src/data/dataMocker'

function App() {

 
  return (
    <div className="App">
      <HeaderNav />
      <main className='main'>
        <AsideNav />
        <section className='dashboard'>
          <HeaderDashboard />
          <div className='datasChart'>
            <ul className="elementList">
              {/* {keydata.map((type, index) => (
                <CardInfos key={index} name={type} />
              ))} */}
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App;
