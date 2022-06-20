import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SubNavbar from '../components/SubNavbar'

const Disclaimer = () => {
    return (
        <>
            <Navbar />
            <SubNavbar />
            <div className='max-w-[90%] mx-auto'>
                <h1 className='text-center mt-10 font-sans font-bold text-red-600 relative after:absolute after:w-[150px] after:left-[50%] after:-translate-x-[50%] after:h-[4px] after:-bottom-2 after:bg-red-600 text-4xl'>Disclaimer</h1>
                <p className='mt-10 text-gray-700 capitalize text-2xl font-sans font-semibold'>
                    Parents has to follow all Terms and Conditions of company. Company is not responsible or answerable for any cash transactions or Direct deal with the home tutor (teacher)
                </p>
            </div>
            <Footer />
        </>
    )
}

export default Disclaimer