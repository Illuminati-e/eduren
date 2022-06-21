import React from 'react'
import { Link } from 'react-router-dom'
import Brand from '../assets/images/logo2.svg'
import { getFooterList } from './allData'
const Footer = () => {
    return (
        <div className='bg-gray-800 mt-[100px] p-10 sm:pl-[50px] sm:pr-[50px] sm:pt-[50px]'>
            <div className='flex space-y-7    justify-evenly flex-wrap'>
                <div className='flex flex-col sm:w-[300px] w-full'>
                    <img src={Brand} alt="Brand" />
                    <p className='text-white mt-[20px] pb-[35px] text-lg'>
                        We are Eduren Academic private limited company, formed by renewed educationalists.
                    </p>
                    <Link to="/about" className='footer-logo-btn shadow-lg text-center uppercase ' >About Us</Link>
                </div>

                {
                    getFooterList()
                }
            </div>
            <div className='flex flex-col mt-[50px]'>
                <hr />
                <h1 className='text-center mt-5 text-white'>@2022 Eduren Academic Private Limited. All right reserved.</h1>
            </div>
        </div>
    )
}

export default Footer