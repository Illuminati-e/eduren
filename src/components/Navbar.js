import React, { useState } from 'react'
import EduRenLogo from '../assets/images/EduRen.svg'
import { getMainNavItems } from './allData';
import { useEffect } from 'react'
const Navbar = () => {

    const [Top, setTop] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const value = window.scrollY;
            if (value > 100) {
                setTop(true);
            } else
                setTop(false);
        })
    }, [])

    return (
        <>
            <div className='up'>
                <a href="#" style={Top ? { display: "block" } : { display: "none" }} className='scrollup text-center'><i className='fas fa-chevron-up'></i></a>
            </div>
            <div className='flex flex-wrap md:items-center justify-between lg:justify-evenly p-4  shadow border border-[#dadada]'>
                <img className='w-[200px]' src={EduRenLogo} alt="EduRenLogo" />
                <div className='lg:hidden '>
                    {/* menu bars */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-yellow-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
                <div className='hidden lg:flex '>
                    {getMainNavItems()}
                </div>
            </div>
        </>
    )
}

export default Navbar