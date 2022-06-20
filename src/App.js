import React from 'react'
import FAQ from './layouts/FAQ'
import Home from './layouts/Home'
import { Route, Routes } from 'react-router-dom'
import ContactUs from './layouts/ContactUs'
import CapexTeacher from "./layouts/CapexTeacher";
import Aboutus from "./layouts/Aboutus";
import TermsandConditions from "./layouts/TermsandConditions";
import Error404 from './components/Error404'
import FeesDeposit from './layouts/FeesDeposit'
import Disclaimer from './layouts/Disclaimer'
import OurAssociations from './layouts/OurAssociations'
const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/contactus' element={<ContactUs />} />
      <Route exact path='/faq' element={<FAQ />} />
      <Route exact path='/about' element={<Aboutus />} />
      <Route exact path='/capexteacher' element={<CapexTeacher />} />
      <Route exact path='/termsandconditions' element={<TermsandConditions />} />
      <Route exact path='/deposit' element={<FeesDeposit />} />
      <Route exact path='/disclaimer' element={<Disclaimer />} />
      <Route exact path='//association' element={<OurAssociations />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  )
}

export default App;
