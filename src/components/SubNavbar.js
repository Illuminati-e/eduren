import React from 'react'
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'
import DropDown from './DropDown'
const SubNavbar = () => {
    //drop down links 
    const dropDownLinks = [{
        title: "Home",
        id: 1,
        Links: [{
            id: 1,
            name: "Home page 1",
            link: "",
        }, {
            id: 2,
            name: "Home page 2",
            link: "",
        }, {
            id: 3,
            name: "Home page 3",
            link: "",
        }, {
            id: 4,
            name: "Home page 4",
            link: "",
        }],
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
        <div className='justify-evenly border relative p-2 hidden lg:flex'>
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