import React from 'react'
import EduRenLogo from '../assets/images/EduRen.svg'
import MailIcon from '../assets/images/Mail.png'
import CallIcon from '../assets/images/Call.png'
import ClockIcon from '../assets/images/Clock.png'
import PinIcon from '../assets/images/Pin.png'
import NavLinks from './NavLinks'
const Navbar = () => {
    // header Icons
    const Icon = [{
        id: 1,
        img: MailIcon,
        title: "edurenacademic@gmail.com",
        subTitle: "Mail Us",
        flag: true,
    },
    {
        id: 2,
        img: CallIcon,
        title: "Requesting a Call:",
        subTitle: "8511222507",
        flag: true,
    },
    {
        id: 3,
        img: ClockIcon,
        title: "Sunday - Friday",
        subTitle: "9am - 8pm",
        flag: true,
    },
    {
        id: 4,
        img: PinIcon,
        title: "Vatva, Ahmedabad",
        subTitle: "Gujarat"
    }

    ]
    // function maps and return  
    const getNavLinks = () => {
        return (

            Icon.map((icon) => (
                <NavLinks key={icon.id} img={icon.img} title={icon.title} subTitle={icon.subTitle} flag={icon.flag} />
            ))
        )
    }

    return (
        <div className='flex flex-wrap md:items-center justify-between lg:justify-evenly p-4  shadow border border-[#dadada]'>
            <img className='w-[200px]' src={EduRenLogo} alt="EduRenLogo" />
            <div className='lg:hidden '>
                {/* menu bars */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-yellow-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <div className='hidden lg:flex'>
                {getNavLinks()}
            </div>
        </div>
    )
}

export default Navbar