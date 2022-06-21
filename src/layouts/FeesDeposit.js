import React, { useEffect } from 'react'
import SubNavbar from '../components/SubNavbar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const FeesDeposit = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <Navbar />
            <SubNavbar />
            <div>
                <h1 className='text-4xl text-center font-bold text-gray-800 font-sans mt-10'>Where to Deposit Fees</h1>
                <div className='flex max-w-[90%] font-sans font-semibold text-2xl mt-10 justify-start flex-col mx-auto gap-3'>
                    <p className='font-black'>- Parents must deposit fees in the Eduren company HDFC Bank account online or can deposit cheque in the HDFC Bank only.</p>
                    <p>Name : Eduren academic private limited</p>
                    <p>Bank : HDFC Bank</p>
                    <p>Account Number : </p>
                    <p>Type : Current</p>
                    <p>IFSC Code : </p>
                    <p>Branch : Vatva Branch, Ahmedabad</p>
                </div>
            </div>
            <div className='max-w-[90%] mx-auto'>
                <h1 className='font-bold text-4xl text-red-600 text-center mt-10 font-sans'>Refund Policy</h1>
                <p className='font-semibold mt-10 text-left text-2xl capitalize font-sans '>
                    if parents are not convenient with the home teaching service, Fees will be Refunded in parents account after deduction. such deduction includes teachers salary and company's operation charges.
                </p>
            </div>
            <Footer />
        </>
    )
}

export default FeesDeposit