import React from 'react'
import { getFollowUs } from './allData'
import {Link} from 'react-router-dom';
const FooterList = ({ title, icons, flag = false }) => {
    return (
        <div className='flex flex-col w-full sm:w-fit '>
            <div className='flex relative mb-5'>
                <h1 className='text-white text-3xl mb-2'>{title}</h1>
                <span className='border-2 absolute bottom-0 border-solid border-yellow-300 bg-yellow-300 w-[30px] h-[1px]'></span>
            </div>
            {
                icons.map((info) => (
                    <div key={info.id} className="flex p-1 items-center">
                        <i className={`fa-solid ${info.icon} text-yellow-300`}></i>
                        <Link to={`${info.link}`}> <p id={`${info.link}`} className='ml-4 text-white'>{info.title}</p></Link>
                    </div>
                ))
            }
            <div className='flex items-center mt-4 text-yellow-400'>
                {flag && getFollowUs()}
            </div>
        </div>
    )
}

export default FooterList