import React from 'react'
import { FaPlus, FaRegDotCircle } from 'react-icons/fa'
import "./DropDown.css"
const DropDown = ({ title, Links = [] }) => {
    return (
        <div className='flex items-center cursor-pointer group p-4 h-auto relative'>
            <h1 className='text-lg font-serif font-semibold'>{title}</h1>
            <FaPlus className='text-yellow-400 font-extralight ml-1' />
            <span className='h-[3px] bg-yellow-300 group-hover:w-20 w-0  ease-in border border-solid absolute bottom-0 invisible duration-200 group-hover:ease-in group-hover:visible border-yellow-300'></span>
            {Links.length !== 0 && (<ul className='absolute z-10 bg-white translate-y-5 invisible group-hover:visible ease-linear duration-200 group-hover:translate-y-0 top-[100%] w-[200px] shadow-md border-b-2 border-yellow-400'>
                {
                    Links.map((link) => (
                        <li key={link.id} className='p-4 border flex items-center font-semibold font-sans hover:text-white text-md hover:bg-yellow-400  hover:border-0 transition duration-150 ease-in '> <FaRegDotCircle className='icon duration-150 transition ease-in  invisible' /> <span className="ml-2">{link.name}</span></li>
                    ))
                }

            </ul>)}
        </div>
    )
}

export default DropDown