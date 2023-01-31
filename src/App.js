import React from 'react'
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import Confession from './components/Confession/Confession'
import Wall from './components/Wall/Wall'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path='/' element={<Main/>}> </Route>
          <Route path='/Confess' element={<Confession/>}> </Route>
          <Route path='/Wall' element={<Wall/>}> </Route>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App