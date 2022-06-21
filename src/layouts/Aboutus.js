import React, { useEffect } from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SubNavbar from "../components/SubNavbar";
import AboutUsImg from "../assets/images/aboutUsPage.jpg"
const Aboutus = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [])
	return (
		<>
			<Navbar />
			<SubNavbar />
			<About img={AboutUsImg} flag={true} />
			<div className="mt-[30px] container mx-auto">
				<div className="flex items-center flex-wrap justify-center">
					<div className="flex flex-wrap p-2 justify-evenly items-center">
						<div className="w-full yl-about-text pera-content text-xl p-3 sm:p-0">
							<p>
								Our Research on Educational model , Teaching models, Learning
								Habits and Learning styles of different countries and different
								students of various geographical regions in international
								studies motivate us to create this model for academic service.
							</p>
							<p>
								Our association with different colleges, EdTech companies help
								us to serve our customers/ Parents.
							</p>
							<p>
								The primary service of the company is to provide Home Tuition in
								standard 1 to 10 in pan India as CAPAX TEACHER @ HOME ,under
								campaign, ‘ Teacher & Technology at Home
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-10 w-full  mx-auto">
				<h1 className="text-center mt-10 font-sans font-bold text-yellow-500 relative after:absolute after:w-[150px] after:left-[50%] after:-translate-x-[50%] after:h-[4px] after:-bottom-2 after:bg-gray-600 text-3xl sm:text-4xl">Our Services & Products :</h1>
				<div className="text-gray-900 max-w-[90%] sm:max-w-[80%] mx-auto text-xl font-semibold capitalize font-sans mt-10 flex flex-col gap-3">
					<p>
						- we provide trained and qualified teachers for home tutoring for different boards like CBSE, GSEB, ICSC, IB etc. along with that value added services and products like VR technology, Audio Visual Learning software, Educational counselling, memory technique workshop are also included in our services.
					</p>
					<p>
						- Online & offline workshop for students welfare other than academics also. Ex Banking Knowledge, First safety guidance, electric bill savings, first aid treatments, share/stock exchange mutual fund knowledge, investments and savings, etc.
					</p>
					<p>
						- Workshop for improving learning style and learning habits of the students. Memory Training workshops etc.
					</p>
					<p>
						- <span className="text-red-700">Question Papers</span> To get question papers for your child, whatsapp us your child name, school, standard-medium, subject and chapter.
					</p>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Aboutus;
