import React from 'react'
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'
import DropDown from './DropDown'
const SubNavbar = ({ sticky }) => {
    //drop down links 
    const dropDownLinks = [{
        title: "Home",
        id: 1,
    }, {
        title: "About",
        id: 2,
    }, {
        title: "Products",
        id: 3,
        Links: [{
            id: 1,
            name: "Capex Teacher",
            link: ""
        },
        {
            id: 2,
            name: "VR Tech",
            link: ""
        }, {
            id: 3,
            name: "Capex EduCounsellor",
            link: ""
        }, {
            id: 4,
            name: "Audio Visual Learning",
            link: ""
        }]
    },
    {
        title: "ContactUs",
        id: 4,
    }
    ]
    const followUs = [{ id: 1, icon: <FaFacebookF /> }, { id: 2, icon: <FaTwitter /> }, { id: 3, icon: <FaYoutube /> }]
    const getFollowUs = () => {
        return (
            followUs.map((follow) => (
                <span className='cursor-pointer transition-all hover:shadow-md hover:text-blue-800 hover:bg-white p-3' key={follow.id}>{follow.icon}</span>
            ))
        )
    }
    const getDropDown = () => {
        return (
            dropDownLinks.map((dropdown) => (
                <DropDown key={dropdown.id} title={dropdown.title} Links={dropdown.Links} />
            ))
        )
    }
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