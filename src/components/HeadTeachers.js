import React from 'react'
import { getHeadTeacherInfo } from './allData'
import OwlCarousel from 'react-owl-carousel'
const HeadTeachers = () => {
    return (
        <div className='flex flex-col  p-3 sm:p-[100px] yl-department-section overflow-hidden'>
            <div className='yl-section-title sm:ml-0 ml-4 yl-headline w-[500px] mb-10'>
                <h2>Head Teachers</h2>
            </div>
            <div className='w-full flex justify-center '>

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
                            items: 3,

                        },
                        1900: {
                            items: 3,

                        }
                    }}
                    id="yl-instructor-slider" className="yl-instructor-slide-area owl-theme">
                    {getHeadTeacherInfo()}

                </OwlCarousel>

            </div>
        </div>
    )
}

export default HeadTeachers