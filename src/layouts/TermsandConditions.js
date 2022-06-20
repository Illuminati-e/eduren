import React from "react";
import { getTermsAndCondition } from "../components/allData";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SubNavbar from "../components/SubNavbar";

const TermsandConditions = () => {
	return (
		<>
			<Navbar />
			<SubNavbar />
			<h1 className='text-2xl font-bold sm:text-4xl text-center mt-10 font-sans '>Terms and Condition for Parents</h1>
			<div className='flex mt-10 flex-col gap-3 max-w-6xl mx-auto'>
				{getTermsAndCondition()}
			</div>
			<Footer />
		</>
	);
};

export default TermsandConditions;
