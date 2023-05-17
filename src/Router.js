import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/atoms/Login'
import AboutUs from './components/atoms/AboutUs'
import Registration from './components/atoms/Registration'
import Header from './components/atoms/Header'
import Services from './components/atoms/Services'
import KnowMore from './components/atoms/KnowMore'

function Router() {
  return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Header/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/about us' element={<AboutUs/>} />
            <Route path='/registration' element={<Registration/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/know more' element={<KnowMore/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router
