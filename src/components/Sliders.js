import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import Banner1 from '../assets/images/Banner1.jpg';
import Banner2 from '../assets/images/Banner2.jpg';
import './DropDown'
const Sliders = () => {
    return (
        <section >
            <OwlCarousel id="yl-main-slider" items={1} className="" nav={false} navSpeed={1000} smartSpeed={2000} dots={true} margin={20} autoplay={true} loop={true} animateOut='fadeOut' animateIn='fadeIn'>
                <div className='relative z-10'>
                    <div className='img-zooming w-full h-[500px] transition ease-linear bg-no-repeat bg-cover' style={{ backgroundImage: `url(${Banner1})` }}>
                    </div>
                    <div className='absolute w-[100%] h-[100%] top-0 left-0 bottom-0 bg-[#000] opacity-20'>
                    </div>
                </div>
                <div className='relative z-10'>
                    <div className='img-zooming w-full h-[500px] transition ease-linear bg-no-repeat bg-cover' style={{ backgroundImage: `url(${Banner2})` }}>
                    </div>
                    <div className='absolute w-[100%] h-[100%] top-0 left-0 bottom-0 bg-[#000] opacity-20'>
                    </div>
                </div>
            </OwlCarousel>
        </section >
    )
}

export default Sliders