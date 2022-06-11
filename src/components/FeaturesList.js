import React from 'react'

const FeaturesList = ({ icon, title, description }) => {
    return (

        <div className='yl-feature-innerbox flex relative w-[400px]'>
            <div className='yl-feature-icon'>
                <i className={`${icon}`}></i>
            </div>
            <div className='yl-feature-text yl-headline pera-content'>
                <h3><a href="">{title}</a></h3>
                <p>
                    {description}
                </p>
            </div>
        </div>

    )
}

export default FeaturesList