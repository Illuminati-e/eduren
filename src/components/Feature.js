import React, { useEffect } from 'react'
import WOW from 'wowjs';
import { getFeatureList } from './allData';

const Feature = () => {
    useEffect(() => {
        new WOW.WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: false
        }).init();
    }, [])

    return (
        <div className='flex mt-[100px] gap-2 items-center flex-wrap justify-evenly wow fadeInUp' data-wow-delay="0ms" data-wow-duration="1500ms">
            {getFeatureList()}
        </div>
    )
}

export default Feature