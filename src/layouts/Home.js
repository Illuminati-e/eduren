import React, { useEffect, useRef } from "react";
import About from "../components/About";
import CapexTeacherAbout from "../components/CapexTeacherAbout";
import Committee from "../components/Committee";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Sliders from "../components/Sliders";
import SubNavbar from "../components/SubNavbar";

const Home = () => {
	const preloader = useRef();
	useEffect(() => {
		setTimeout(() => {
			const preloaderRemove = document.getElementById(preloader.current.id);
			preloaderRemove.style.display = "none";
		}, 3000);
	}, []);

	return (
		<>
			<div ref={preloader} id="yl-preloader"></div>

			<Navbar />
			<SubNavbar />
			<Sliders />
			<Feature />
			<About />
			<Products />
			<Committee />
			<CapexTeacherAbout />
			<Footer />
		</>
	);
};

export default Home;
