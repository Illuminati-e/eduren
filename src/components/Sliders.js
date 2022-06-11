import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import Banner1 from '../assets/images/Banner1.jpg';
import Banner2 from '../assets/images/Banner2.jpg';
import SliderCollection from './SliderCollection';

const Sliders = () => {
    const sliderInfo = [{
        id: 1,
        img: Banner1,
        title: "Mission",
        subtitle: "To become biggest academic service provider company of india.",
        description: "'Our association with different colleges, edtech companies help us to serve out customers/parents'"
    }, {
        id: 2,
        img: Banner2,
        title: "Why Us",
        subtitle: "We wish to strengthen basic education in out country with proper training and technology",
        description: "'Our association with different colleges, edtech companies help us to serve out customers/parents'"
    }]
    const getSliderInfo = () => {
        return (
            sliderInfo.map((slider) => (
                <SliderCollection key={slider.id} img={slider.img} title={slider.title} subtitle={slider.subtitle} description={slider.description} />
            ))
        )
    }
    return (
        <section >
            <OwlCarousel id="yl-main-slider" items={1} className="yl-main-slider-wrap" nav={false} navSpeed={1000} smartSpeed={2000} dots={true} margin={20} autoplay={true} loop={true} animateOut='fadeOut' animateIn='fadeIn'>
                {getSliderInfo()}
            </OwlCarousel>
        </section >
    )
}

export default Sliders