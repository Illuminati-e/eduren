import React from 'react'
import { getDropDown, getFollowUs } from './allData'
const SubNavbar = () => {

    return (
        <div className="sticky top-0 justify-evenly border bg-white z-30  p-2 hidden lg:flex ">
            <div className='flex justify-end  flex-1  space-x-4 mr-10'>
                {
                    getDropDown()
                }
            </div>
            <div className='flex items-center space-x-6 mr-32 text-xl text-gray-500'>
                {getFollowUs()}
            </div>
        </div>
    )
}

export default SubNavbar