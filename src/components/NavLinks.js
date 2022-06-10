import React from 'react'

const NavLinks = ({ img, title, subTitle, flag = false }) => {
    return (
        <div className='hidden lg:flex justify-end items-center p-2'>
            <div className='flex gap-2 items-center'>
                <div className='mr-2 h-auto mx-w-[100%]'>
                    <img src={img} alt="Icon" className='h-[30px] w-[30px] object-contain  text-yellow-400' />
                </div>
                <div className="flex flex-col items-start">
                    <p className='font-sans text-sm lowercase'>{
                        title}</p>
                    <h2 className='font-bold text-2xl'>{subTitle}</h2>
                </div>
            </div>
            {
                flag && (<span className='ml-7 w-[1px] h-[33px] border-dashed border-[#dadada] border-[1px]'></span>)
            }
        </div>
    )
}

export default NavLinks