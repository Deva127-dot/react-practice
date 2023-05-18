import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Question from './components/molecules/Question'

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Question/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router
