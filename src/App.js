import React from 'react'
import FAQ from './layouts/FAQ'
import Home from './layouts/Home'
import { Route, Routes } from 'react-router-dom'
import ContactUs from './layouts/ContactUs'
import CapexTeacher from "./layouts/CapexTeacher";
import Aboutus from "./layouts/Aboutus";
import TermsandConditions from "./layouts/TermsandConditions";
const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/contactus' element={<ContactUs />} />
      <Route exact path='/faq' element={<FAQ />} />
      <Route exact path='/about' element={<Aboutus />} />
      <Route exact path='/capexteacher' element={<CapexTeacher />} />
      <Route exact path='/termsandconditions' element={<TermsandConditions />} />
    </Routes>
  )
}

export default App;
