import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SubNavbar from '../components/SubNavbar'

const OurAssociations = () => {
    return (
        <>
            <Navbar />
            <SubNavbar />
            <div className='flex flex-col max-w-[90%] mx-auto'>
                <h1 className='text-3xl text-center font-semibold font-sans mt-10 text-gray-800'>Our Associations</h1>
                <div className='text-gray-900 max-w-[80%] mx-auto text-xl font-semibold capitalize font-sans mt-10 flex flex-col gap-3 '>
                    <p>
                        - We are associated with different B.Ed and M.Ed colleges and universities.
                    </p>
                    <p>
                        - We are regional franchise of smart N learn E-learning edutech company
                    </p>
                    <p>
                        - we are associated with brainy wood india, a memory technique and mind power booster company.
                    </p>
                    <p>
                        - we are franchise of edumilestone, a international career counselling firm.
                    </p>
                    <p>
                        - we are also associated with Kachhua technologies for virtual reality distribution in India.
                    </p>
                    <p>
                        - We are partner with maxine educonsultancy for educational counselling business.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default OurAssociations