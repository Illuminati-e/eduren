// NAVBAR
import MailIcon from "../assets/images/Mail.png";
import CallIcon from "../assets/images/Call.png";
import ClockIcon from "../assets/images/Clock.png";
import PinIcon from "../assets/images/Pin.png";
import NavLinks from "./NavLinks";
// SUB-NAVBAR
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import DropDown from "./DropDown";
// Slider
import Banner1 from "../assets/images/Banner1.jpg";
import Banner2 from "../assets/images/Banner2.jpg";
import SliderCollection from "./SliderCollection";
// Feature
import FeaturesList from "./FeaturesList";
// Products
import VRtech from "../assets/images/VR Tech @Home.jpg";
import AudioLearn from "../assets/images/Audio Visual Learning @Home.jpg";
import CapexEduc from "../assets/images/Capex EduCounsellor.jpg";
import CapexTeacher from "../assets/images/Canex Teacher @Home.jpg";
import ProductsCollection from "./ProductsCollection";
// Committee
<<<<<<< HEAD
import CommitteeCollection from './CommitteeCollection'
import inst1 from '../assets/images/teacher/inst-1.jpg'
import inst2 from '../assets/images/teacher/inst-2.jpg'
import inst3 from '../assets/images/teacher/inst-3.jpg'
import inst4 from '../assets/images/teacher/inst-4.jpg'
import inst5 from '../assets/images/teacher/inst-5.jpg'
import inst6 from '../assets/images/teacher/inst-6.jpg'
import inst7 from '../assets/images/teacher/inst-7.jpg'
// Capex Teacher 
import CapexAboutIcon from './CapexAboutIcon'
// Footer 
import FooterList from './FooterList'

//FAQ
import Accordion from './Accordion'



=======
import CommitteeCollection from "./CommitteeCollection";
import inst1 from "../assets/images/teacher/inst-1.jpg";
import inst2 from "../assets/images/teacher/inst-2.jpg";
import inst3 from "../assets/images/teacher/inst-3.jpg";
import inst4 from "../assets/images/teacher/inst-4.jpg";
import inst5 from "../assets/images/teacher/inst-5.jpg";
import inst6 from "../assets/images/teacher/inst-6.jpg";
import inst7 from "../assets/images/teacher/inst-7.jpg";
// Capex Teacher
import CapexAboutIcon from "./CapexAboutIcon";
// Footer
import FooterList from "./FooterList";
import CapexwhyIcon from "./CapexwhyIcon";
>>>>>>> a4d3af7 (capex teacher and termsandcondition)

// main navbar collections
const Icon = [
	{
		id: 1,
		img: MailIcon,
		title: "edurenacademic@gmail.com",
		subTitle: "Mail Us",
		flag: true,
	},
	{
		id: 2,
		img: CallIcon,
		title: "Requesting a Call:",
		subTitle: "8511222507",
		flag: true,
	},
	{
		id: 3,
		img: ClockIcon,
		title: "Sunday - Friday",
		subTitle: "9am - 8pm",
		flag: true,
	},
	{
		id: 4,
		img: PinIcon,
		title: "Vatva, Ahmedabad",
		subTitle: "Gujarat",
	},
];

// function to render the navbar data
export const getMainNavItems = () => {
	return Icon.map((icon) => (
		<NavLinks
			key={icon.id}
			img={icon.img}
			title={icon.title}
			subTitle={icon.subTitle}
			flag={icon.flag}
		/>
	));
};

// Sub Navbar Items
const dropDownLinks = [
	{
		title: "Home",
		id: 1,
	},
	{
		title: "About",
		id: 2,
	},
	{
		title: "Products",
		id: 3,
		Links: [
			{
				id: 1,
				name: "Capex Teacher",
				link: "",
			},
			{
				id: 2,
				name: "VR Tech",
				link: "",
			},
			{
				id: 3,
				name: "Capex EduCounsellor",
				link: "",
			},
			{
				id: 4,
				name: "Audio Visual Learning",
				link: "",
			},
		],
	},
	{
		title: "ContactUs",
		id: 4,
	},
];

// function to get sub-navbar (+dropdown) items
export const getDropDown = () => {
	return dropDownLinks.map((dropdown) => (
		<DropDown key={dropdown.id} title={dropdown.title} Links={dropdown.Links} />
	));
};

// SubNavbar FollowUs items
const followUs = [
	{ id: 1, icon: <FaFacebookF /> },
	{ id: 2, icon: <FaTwitter /> },
	{ id: 3, icon: <FaYoutube /> },
];

// Function to get subNavbar followUS items
export const getFollowUs = () => {
	return followUs.map((follow) => (
		<span
			className="cursor-pointer transition-all hover:shadow-md hover:text-blue-800 hover:bg-white p-3"
			key={follow.id}
		>
			{follow.icon}
		</span>
	));
};

// Slider Items
const sliderInfo = [
	{
		id: 1,
		img: Banner1,
		title: "Mission",
		subtitle: "To become biggest academic service provider company of india.",
		description:
			"'Our association with different colleges, edtech companies help us to serve out customers/parents'",
	},
	{
		id: 2,
		img: Banner2,
		title: "Why Us",
		subtitle:
			"We wish to strengthen basic education in out country with proper training and technology",
		description:
			"'Our association with different colleges, edtech companies help us to serve out customers/parents'",
	},
];

// function to get slider items
export const getSliderInfo = () => {
	return sliderInfo.map((slider) => (
		<SliderCollection
			key={slider.id}
			img={slider.img}
			title={slider.title}
			subtitle={slider.subtitle}
			description={slider.description}
		/>
	));
};

// Feature Items
const featureInfo = [
	{
		id: 1,
		icon: "flaticon-give",
		title: "Affordable Tuition",
		description:
			"Highly competitive rests yet, located in heart of the Nation's Capital.",
	},
	{
		id: 2,
		icon: "flaticon-goal",
		title: "Success Driven",
		description:
			"The experiential learning ensures professional student success.",
	},
	{
		id: 3,
		icon: "flaticon-presentation",
		title: "Accountability",
		description:
			"We provide services by responsibility in order to maintain the trust",
	},
];

//get function Features items
export const getFeatureList = () => {
	return featureInfo.map((feature) => (
		<FeaturesList
			key={feature.id}
			icon={feature.icon}
			title={feature.title}
			description={feature.description}
		/>
	));
};

// Products items
const productInfo = [
	{
		id: 1,
		title: "Capex Teacher",
		subtitle: "Home tutor",
		icon: "flaticon-pencil",
		img: CapexTeacher,
	},
	{
		id: 2,
		title: "VR Tech",
		subtitle: "Virtual Reality Device",
		icon: "flaticon-business-presentation",
		img: VRtech,
	},
	{
		id: 3,
		title: "Capex EduCounsellor",
		subtitle:
			"To know and decide learning style and learning habits of the child",
		icon: "flaticon-graduation-cap",
		img: CapexEduc,
	},
	{
		id: 4,
		title: "Audio Visual Learning",
		subtitle:
			"To know and decide learning style and learning habits of the child",
		icon: "flaticon-pencil",
		img: AudioLearn,
	},
];

// Function to get product items
export const getProduct = () => {
	return productInfo.map((product) => (
		<ProductsCollection
			key={product.id}
			icon={product.icon}
			img={product.img}
			subtitle={product.subtitle}
			title={product.title}
		/>
	));
};

// Committee items
const committeeInfo = [
	{
		id: 1,
		title: "Mrs. Shyamlaben Naik",
		img: inst1,
	},
	{
		id: 2,
		title: "Mr. Saurabh Patel",
		img: inst2,
	},
	{
		id: 3,
		title: "Dr. Sushil Naik",
		img: inst3,
	},
	{
		id: 4,
		title: "Mr. Nirav Nevaskar",
		img: inst4,
	},
	{
		id: 5,
		title: "Dr. Himanshu Patel",
		img: inst5,
	},
	{
		id: 6,
		title: "Mr. Vatsal Thakkar",
		img: inst6,
	},
	{
		id: 7,
		title: "Dr. Madhuri Raval",
		img: inst7,
	},
];

// function to get committee items
export const getCommitteeInfo = () => {
	return committeeInfo.map((info) => (
		<CommitteeCollection key={info.id} title={info.title} img={info.img} />
	));
};

// Capex Teacher Items
const iconInfo = [
	{
		id: 1,
		title: "Teacher",
		description:
			"Qualified and Trained Teachers to teach your child ar your home.",
	},
	{
		id: 2,
		title: "Mentor",
		description:
			"communicate with student, teacher and parent to track the progress.",
	},
	{
		id: 3,
		title: "Teacher Head",
		description:
			"track the syllabus progress & guide the teacher (Home Tutor).",
	},
	{
		id: 4,
		title: "Counsellor",
		description: "Conduct online webinar to motivate your child",
	},
];

// function to get the capex teacher items
export const getIcon = () => {
	return iconInfo.map((icon) => (
		<CapexAboutIcon
			key={icon.id}
			title={icon.title}
			description={icon.description}
		/>
	));
};

// Why you need Capax Teacher Items

const whyIconInfo = [
	{
		id: 1,
		icon: "FaLongArrowAltRight",
		description: "For working parents",
	},

	{
		id: 2,
		icon: "FaLongArrowAltRight",
		description:
			"Want a person to teach and monitor academic progress of your  child",
	},

	{
		id: 3,
		icon: "FaLongArrowAltRight",
		description: "For those regions Quality Teachers are not available.",
	},

	{
		id: 4,
		icon: "FaLongArrowAltRight",
		description: "If your child is too shy to learn in group in classes.",
	},

	{
		id: 5,
		icon: "FaLongArrowAltRight",
		description: "If you need extra coaching for your child",
	},

	{
		id: 6,
		icon: "FaLongArrowAltRight",
		description: "If you need quality teaching with technology",
	},

	{
		id: 7,
		icon: "FaLongArrowAltRight",
		description:
			"If your child is too poor in learning & need personal attention",
	},

	{
		id: 8,
		icon: "FaLongArrowAltRight",
		description:
			"If you wish to  Regulate teaching sessions as per child’s need in subject",
	},

	{
		id: 9,
		icon: "FaLongArrowAltRight",
		description:
			"If you wish  your child to compete with students of other Regions & schools.",
	},

	{
		id: 10,
		icon: "FaLongArrowAltRight",
		description:
			"If you wish to save time of your child to spare  for Hobby For any reason stated above",
	},
];

//function to get the why you need capex teacher items
export const getwhyiconInfo = () => {
	return whyIconInfo.map((iconwhy) => (
		<CapexwhyIcon
			key={iconwhy.id}
			title={iconwhy.icon}
			description={iconwhy.description}
		/>
	));
};

// footer items
const footerList = [
	{
		id: 1,
		title: "Useful Links:",
		icons: [
			{
				id: 1,
				title: "Home",
				icon: "fa-link",
			},
			{
				id: 2,
				title: "About Us",
				icon: "fa-link",
			},
			{
				id: 3,
				title: "Contact Us",
				icon: "fa-link",
			},
		],
	},
	{
		id: 2,
		title: "Official Info:",
		icons: [
			{
				id: 1,
				icon: "fa-location-crosshairs",
				title: "Vatva Ahmedabad, Gujarat",
			},
			{
				id: 2,
				icon: "fa-envelope",
				title: "edurenacademic@gmail.com",
			},
			{
				id: 3,
				icon: "fa-phone",
				title: "8511222507,8488829699",
			},
		],
	},
	{
		id: 3,
		title: "Products",
		icons: [
			{
				id: 1,
				title: "Capex Teacher",
				icon: "fa-link",
			},
			{
				id: 2,
				title: "VR Tech",
				icon: "fa-link",
			},
			{
				id: 3,
				title: "Capex EduCounsellor",
				icon: "fa-link",
			},
			{
				id: 4,
				title: "Audio Visual Learning",
				icon: "fa-link",
			},
		],
	},
];

//function to get footer items
export const getFooterList = () => {
<<<<<<< HEAD
    return (
        footerList.map((info) => (
            <FooterList title={info.title} icons={info.icons} key={info.id} />
        ))
    )
}




//FAQ Data
const faqData=[
    {
    title: '1) Is the Teacher who will come to tach my child at Home, is Experienced ?',
    content:'Of course. We select teacher after proper verification and  interview. Only experienced teachers are sent to teach at Home.',
    },
    {
    title: '2) What are the other benefits if we get capax Teacher @ Home ?',
    content:' Parents will get Mentor  & Head Teacher along with Home Tutor. Online webinar of our counsellor will also help the child.',
    },   {
    title: '3) What is  the Role of the Mentor ?',
    content:'Mentor will Track the progress of the child and regularly communicate with Parent, Student and Teacher.',
    },   {
    title: '4) What are the student welfare Webinar and Seminars about ?',
    content:'It’s a Value added services for students overall development.',
    },   {
    title: '5) What to do if Home Tutor ? Teacher is not coming regularly at Home ?',
    content:'company track the regularity and punctuality of the Teacher. In any such situation company may provide equally capable teacher.',
    },   {
    title: '6) How can my child compete with other students ?',
    content:' If students and Parents demand we can conduct Common Test for all students registered.',
    },   {
    title: '7) What will be the Test and Exam schedule ? ',
    content:'Teacher is responsible to take weekly Test of your child.',
    },   {
    title: '8) How can Parents come to know about their child’s Progress ?',
    content:'Our Mentor talk with Parents to inform them. Along with this A Record Card is also at Parents Home which is regularly signed by Teacher and Parent or Gardian.',
    },   {
    title: '9) How can we communicate with Teacher and Mentor ?',
    content:'A common WhatsApp group will generated for easy and transparent communication.',
    },   {
    title: '10) When Parents need to pay the Fees ? ',
    content:' Fees is to be paid Online only into Company’s current account , that is 60 % fees after Three lectures taken by the Teacher.  Remaining 40 % will according to schedule given by company.',
    },   {
    title: '11) What is the Refund policy ?',
    content:'If Parents are not convenient with the  Home teaching service, Fees will be Refunded in parents account after deduction. Such Deduction includes Teachers salary and company’s operation charges.',
    },
    {
     title: '12) What if due to any reason like students sickness or any social activity we could not get teaching service for some time ?',
    content:' We  might try to compensate the lectures by arranging extra timings but it will strictly as par Teachers convenience , No provision of reducing Fees once decided.' ,
    },
    

];

//FAQ function
export const getFaqData = () => {
    return (
        faqData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))
  
    )
}
=======
	return footerList.map((info) => (
		<FooterList title={info.title} icons={info.icons} key={info.id} />
	));
};
>>>>>>> a4d3af7 (capex teacher and termsandcondition)
