import React from 'react'

const TermsConditionComponent = ({ description }) => {
    return (
        <>
            <div className='flex items-center justify-start'>
                <i className="fas fa-arrow-right text-2xl mr-5"></i>
                <p className='text-2xl font-sans '>{description}</p>
            </div>

        </>
    )
}

export default TermsConditionComponent