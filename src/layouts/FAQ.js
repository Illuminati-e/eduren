import React from 'react'
import Accordion from '../components/Accordion'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SubNavbar from '../components/SubNavbar'
import {getFaqData} from '../components/allData';

function FAQ() {
    
  return (
   <>
   <Navbar/>
   <SubNavbar/>
  
   <div className='mt-[50px]'>
      <h1 style={{margin:"auto",fontSize:"3rem"}} className="text-center font-bold">FAQs</h1>
      <div className="max-w-screen-md  m-auto mt-5" >
        {getFaqData()}
      </div>
  </div>
   <Footer/>
   </>
  )
}

export default FAQ