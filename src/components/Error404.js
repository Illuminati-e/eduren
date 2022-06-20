import React from 'react'
import errorPage from '../assets/images/404svg.svg'
import { useNavigate } from 'react-router-dom'
const Error404 = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/');
  }
  return (
    <div className='w-screen h-screen relative bg-no-repeat bg-center bg-contain' style={{ backgroundImage: `url(${errorPage})` }}>
      <button className='py-3 px-12 bg-[#4656A1] rounded-full font-sans text-base absolute bottom-0 left-[50%] -translate-x-[50%] -translate-y-[50%] hover:shadow-md hover:shadow-[#4656A1]/75 hover:text-white text-white font-semibold' onClick={handleNavigate}>Go Home</button>
    </div>
  )
}

export default Error404