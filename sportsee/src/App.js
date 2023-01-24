import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Homepage from './pages/Homepage/Homepage'
import Dashboard from './pages/Dashboard/Dashboard'
// import Error404 from './pages/Error404/Error404'

import '../src/App.css'

const App = () => {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Homepage/>} /> 
          <Route path="/" element={<Dashboard/>}/> 
          {/* <Route path="*" element={<Error404/>} /> */}
        </Routes>
    </Router>
    
  )
}

export default App