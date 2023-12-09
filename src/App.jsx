import { useState } from 'react'
import Navbar from './components/Navbar'
// import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-500">

        <Router>
          <Routes>
            <Navbar/>
            <Route path='/' element={'Home'} />
            <Route path='/about' element={'About'} />
            <Route path='/projects' element={'Projects'} />
            <Route path='/contact' element={'Contact'} />
          </Routes>

        </Router>

      </h1>
    </>
  )
}

export default App
