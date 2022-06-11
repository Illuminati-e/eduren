import React from 'react'
import Brand from '../assets/images/logo2.svg'
import FooterList from './FooterList'
const Footer = () => {
    const footerList = [{
        id: 1,
        title: "Useful Links:",
        icons: [{
            id: 1,
            title: "Home",
            icon: "fa-link",
        },
        {
            id: 2,
            title: "About Us",
            icon: "fa-link",
        }, {
            id: 3,
            title: "Contact Us",
            icon: "fa-link",
        },
        ]
    }, {
        id: 2,
        title: "Official Info:",
        icons: [{
            id: 1,
            icon: "fa-location-crosshairs",
            title: "Vatva Ahmedabad, Gujarat"
        }, {
            id: 2,
            icon: "fa-envelope",
            title: "edurenacademic@gmail.com"
        }, {
            id: 3,
            icon: "fa-phone",
            title: "8511222507,8488829699"
        }]
    }, {
        id: 3,
        title: "Products",
        icons: [{
            id: 1,
            title: "Capex Teacher",
            icon: "fa-link",
        },
        {
            id: 2,
            title: "VR Tech",
            icon: "fa-link",
        }, {
            id: 3,
            title: "Capex EduCounsellor",
            icon: "fa-link",
        }, {
            id: 4,
            title: "Audio Visual Learning",
            icon: "fa-link",
        },
        ]

    }]

    const getFooterList = () => {
        return (
            footerList.map((info) => (
                <FooterList title={info.title} icons={info.icons} key={info.id} />
            ))
        )
    }
    return (
        <div className='bg-gray-800 mt-[100px] p-10 sm:pl-[50px] sm:pr-[50px] sm:pt-[50px]'>
            <div className='flex space-y-7    justify-evenly flex-wrap'>
                <div className='flex flex-col sm:w-[300px] w-full'>
                    <img src={Brand} alt="Brand" />
                    <p className='text-white mt-[20px] pb-[35px] text-lg'>
                        We are Eduren Academic private limited company, formed by renewed educationalists.
                    </p>
                    <a href='#' className='footer-logo-btn shadow-lg text-center uppercase ' >About Us</a>
                </div>

                {
                    getFooterList()
                }
            </div>
            <div className='flex flex-col mt-[50px]'>
                <hr />
                <h1 className='text-center mt-5 text-white'>@2022 Eduren Academic Private Limited. All right reserved.</h1>
            </div>
        </div>
    )
}

export default Footer