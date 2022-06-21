import React, { useEffect } from 'react'
import ContactUsComponent from '../components/ContactUsComponent'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SubNavbar from '../components/SubNavbar'

const ContactUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <Navbar />
            <SubNavbar />
            <ContactUsComponent />
            <Footer />
        </>
    )
}

export default ContactUs