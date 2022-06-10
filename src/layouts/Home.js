import React, { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar';
import Sliders from '../components/Sliders';
import SubNavbar from '../components/SubNavbar';

const Home = () => {
    const preloader = useRef();
    useEffect(() => {
        setTimeout(() => {
            const preloaderRemove = document.getElementById(preloader.current.id);
            preloaderRemove.style.display = "none"
        }, 3000)
    }, [])

    return (
        <>
            <div ref={preloader} id="yl-preloader"></div>
            <Navbar />
            <SubNavbar />
            <Sliders />
        </>
    )
}

export default Home