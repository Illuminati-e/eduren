import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import CommitteeCollection from './CommitteeCollection'
import inst1 from '../assets/images/teacher/inst-1.jpg'
import inst2 from '../assets/images/teacher/inst-2.jpg'
import inst3 from '../assets/images/teacher/inst-3.jpg'
import inst4 from '../assets/images/teacher/inst-4.jpg'
import inst5 from '../assets/images/teacher/inst-5.jpg'
import inst6 from '../assets/images/teacher/inst-6.jpg'
import inst7 from '../assets/images/teacher/inst-7.jpg'
const committeeInfo = [{
    id: 1,
    title: "Mrs. Shyamlaben Naik",
    img: inst1,
}, {
    id: 2,
    title: "Mr. Saurabh Patel",
    img: inst2,
}, {
    id: 3,
    title: "Dr. Sushil Naik",
    img: inst3,
}, {
    id: 4,
    title: "Mr. Nirav Nevaskar",
    img: inst4,
}, {
    id: 5,
    title: "Dr. Himanshu Patel",
    img: inst5,
}, {
    id: 6,
    title: "Mr. Vatsal Thakkar",
    img: inst6,
}, {
    id: 7,
    title: "Dr. Madhuri Raval",
    img: inst7,
}]
const getCommitteeInfo = () => {
    return (
        committeeInfo.map((info) => (
            <CommitteeCollection key={info.id} title={info.title} img={info.img} />
        ))
    )
}

const Committee = () => {
    return (
        <div className='flex flex-col  p-3 sm:p-[100px] yl-department-section'>
            <div className='yl-section-title yl-headline w-[500px] mb-10'>
                <span>
                    Our Advisory
                </span>
                <h2>Core Committee</h2>
            </div>
            <div className='w-full flex justify-center'>

                <OwlCarousel margin={30} responsiveClass={true} nav={true} dots={false} navText={["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"]}
                    loop={true}
                    responsive={{
                        0: {
                            items: 1,
                        },
                        400: {
                            items: 1,
                        },
                        600: {
                            items: 1,
                        },
                        700: {
                            items: 2,
                        },
                        1000: {
                            items: 3,

                        },
                        1300: {
                            items: 4,

                        },
                        1900: {
                            items: 4,
                        },
                    }}
                    id="yl-instructor-slider" className="yl-instructor-slide-area owl-theme">
                    {getCommitteeInfo()}

                </OwlCarousel>

            </div>
        </div>
    )
}

export default Committee