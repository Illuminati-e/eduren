import React from 'react'
import FAQ from './layouts/FAQ'
import Home from './layouts/Home'
import { Route, Routes } from 'react-router-dom'
import ContactUs from './layouts/ContactUs'
const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/contactus' element={<ContactUs />} />
      <Route path='/faq' element={<FAQ />} />
    </Routes>
  )
}

export default App