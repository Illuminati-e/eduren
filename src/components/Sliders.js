import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import { getSliderInfo } from './allData'


const Sliders = () => {
    return (
        <section >
            <OwlCarousel id="yl-main-slider" items={1} className="yl-main-slider-wrap" nav={false} navSpeed={1000} smartSpeed={2000} dots={true} margin={20} autoplay={true} loop={true} animateOut='fadeOut' animateIn='fadeIn'>
                {getSliderInfo()}
            </OwlCarousel>
        </section >
    )
}

export default Sliders