import React, { useState } from 'react'
import EduRenLogo from '../assets/images/EduRen.svg'
import EduRenMobileLogo from '../assets/images/logo2.svg'
import { getMainNavItems, getMobileDropDown } from './allData';
import { useEffect } from 'react'
const Navbar = () => {
    const [Top, setTop] = useState(false);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth > 991) {
                setToggle(false);
            }
        })
        window.addEventListener('scroll', () => {
            const value = window.scrollY;
            if (value > 100) {
                setTop(true);
            } else
                setTop(false);
        })
    }, [])

    // menu toggle
    const menuAction = () => {
        setToggle((prev) => !prev);
    }

    return (
        <>
            <div className='up'>
                <a href="#" style={Top ? { display: "block" } : { display: "none" }} className='scrollup text-center'><i className='fas fa-chevron-up'></i></a>
            </div>
            <div className='flex flex-wrap md:items-center justify-between  lg:justify-evenly p-4 relative top-0  bg-white shadow border border-[#dadada] overflow-x-hidden'>
                <img className='w-[200px]' src={EduRenLogo} alt="EduRenLogo" />
                <div className='lg:hidden text-yellow-500 cursor-pointer' onClick={menuAction}>
                    {/* menu bars */}
                    {
                        (<svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>)
                    }
                </div>
                <div className='hidden lg:flex '>
                    {getMainNavItems()}
                </div>
            </div>
            {/* mobile menu */}
            {/* overlay */}
            <div className={`${toggle ? "fixed w-screen z-[100] h-screen opacity-90 bg-gray-900 top-0" : ""}`} onClick={menuAction}></div>
            <div className={` ${toggle ? "right-0" : "-right-[500px]"} w-[300px] h-[100vh] bg-white top-0 fixed z-[199] transition-all duration-150 ease-in p-3`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="text-yellow-400 cursor-pointer h-9 w-9" onClick={menuAction} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <div className="flex flex-col mt-10">
                    <div className='w-full flex p-2 items-center justify-center'>
                        <img className='w-[250px] mr-10' src={EduRenMobileLogo} alt="logo" />
                    </div>
                    {getMobileDropDown()}
                </div>
            </div>
        </>
    )
}

export default Navbar