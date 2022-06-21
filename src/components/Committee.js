import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import { getCommitteeInfo } from './allData'
const Committee = () => {
    return (
        <div className='flex flex-col  p-3  sm:p-[100px] yl-department-section overflow-hidden'>
            <div className='yl-section-title sm:ml-0 ml-4 yl-headline w-[500px] mb-10'>
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