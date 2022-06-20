import React, { useEffect, useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const MobileDropDown = ({ title, Links = [], path }) => {
    const [drop, setDrop] = useState(false);
    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth > 991) {
                setDrop(false);
            }
        })
    })
    return (
        <div className='flex items-center flex-col overflow-hidden relative'>
            <div className='cursor-pointer mt-10 w-full flex ml-20 item-center text-gray-900 space-x-3' onClick={() => setDrop((prev) => !prev)}>
                <Link to={`${path}`} className='text-2xl font-semibold underline'>{title}</Link>
                {Links.length !== 0 && (<FaAngleDown className='text-2xl mt-auto' />)}
            </div>
            {
                Links.length !== 0 && (
                    <ul style={drop ? { display: "block" } : { display: "none" }} className='mt-2 text-gray-800 font-semibold text-xl  transition-all duration-150 ease-linear'>
                        {
                            Links.map((link) => (
                                <li key={link.id} className="p-2 hover:shadow-lg hover:bg-gray-400 rounded-md"><Link to={`${link.link}`} className='p-3 hover:underline cursor-pointer'>{link.name}</Link></li>
                            ))
                        }
                    </ul>
                )
            }
        </div>
    )
}

export default MobileDropDown