import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import Confession from './components/Confession/Confession'
import Wall from './components/Wall/Wall'

function App() {
  return (
    <div>
      <Navbar />
      <div className="space"></div>
      <Confession />
      <div className="space"></div>
      {/* <Router>
        <Routes>
          <Route path='/' component={<Main/>} />
          <Route exact path='/Confess' component={<Confession/>} />
          <Route exact path='/Wall' component={<Wall />} />
          <Navigate to='/' />
        </Routes>
      </Router> */}
    </div>
  )
}

export default App