import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

import Homepage from './pages/Homepage/Homepage'
import Dashboard from './pages/Dashboard/Dashboard'
import Error404 from './pages/Error404/Error404'

import '../src/App.css'

/** 
 * @file App.js is the root file for this app. <br>
 * Javascript file containing mock data.<br>
 * <a href="data/dataMocker.js.html">dataMocker.js</a> can be used to develop, implement and test code without calling data by api.
 * @author Veronica BERNARD
 * @see <a href="https://github.com/VSABernard">My GitHub</a>
 */

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} /> 
          <Route path="/Dashboard/:userId" element={<Dashboard/>}/> 
          <Route path="*" element={<Error404/>} />
        </Routes>
    </BrowserRouter>    
  )
}

export default App