import React from 'react'
import AboutImg from '../assets/images/capexTeacherabout.jpg'
import AboutReusable from './AboutReusable'
import CapexAboutIcon from './CapexAboutIcon'

const CapexTeacherAbout = () => {
    const iconInfo = [{
        id: 1,
        title: "Teacher",
        description: "Qualified and Trained Teachers to teach your child ar your home."
    },
    {
        id: 2,
        title: "Mentor",
        description: "communicate with student, teacher and parent to track the progress."
    },
    {
        id: 3,
        title: "Teacher Head",
        description: "track the syllabus progress & guide the teacher (Home Tutor)."
    },
    {
        id: 4,
        title: "Counsellor",
        description: "Conduct online webinar to motivate your child"
    },
    ]
    const getIcon = () => {
        return (
            iconInfo.map((icon) => (
                <CapexAboutIcon key={icon.id} title={icon.title} description={icon.description} />
            ))
        )
    }
    return (
        <div className='mt-[100px]'>
            <div className='mt-[50px]'>
                <div className='flex justify-center flex-wrap'>
                    {<AboutReusable img={AboutImg} />}
                    <div className='ml-10 sm:w-[700px] mt-10 sm:mt-0'>
                        <div className='relative mx-w-[599px]'>
                            <p className='text-[100px] text-left text-[#53536c] font-black left-0  mb-0 opacity-[0.04] absolute right-0 -top-[80px]'>
                                About Us
                            </p>
                            <h2 className='capitalize text-[50px] leading-tight font-black'>What you will get in capex teacher ?</h2>
                        </div>
                        {getIcon()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CapexTeacherAbout