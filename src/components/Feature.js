import React, { useEffect } from 'react'
import WOW from 'wowjs';
import FeaturesList from './FeaturesList';
const Feature = () => {
    useEffect(() => {
        new WOW.WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true
        }).init();
    }, [])

    const featureInfo = [{
        id: 1,
        icon: "flaticon-give",
        title: "Affordable Tuition",
        description: "Highly competitive rests yet, located in heart of the Nation's Capital."
    },
    {
        id: 2,
        icon: "flaticon-goal",
        title: "Success Driven",
        description: "The experiential learning ensures professional student success."
    }, {
        id: 3,
        icon: "flaticon-presentation",
        title: "Accountability",
        description: "We provide services by responsibility in order to maintain the trust"
    }
    ]

    const getFeatureList = () => {
        return (
            featureInfo.map((feature) => (
                <FeaturesList key={feature.id} icon={feature.icon} title={feature.title} description={feature.description} />
            ))
        )
    }

    return (
        <div className='flex mt-[100px] items-center flex-wrap justify-evenly wow fadeInUp' data-wow-delay="0ms" data-wow-duration="1500ms">
            {getFeatureList()}
        </div>
    )
}

export default Feature