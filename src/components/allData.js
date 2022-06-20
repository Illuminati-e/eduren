// NAVBAR
import MailIcon from '../assets/images/Mail.png'
import CallIcon from '../assets/images/Call.png'
import ClockIcon from '../assets/images/Clock.png'
import PinIcon from '../assets/images/Pin.png'
import NavLinks from './NavLinks'
import MobileDropDown from './MobileDropDown'
// SUB-NAVBAR
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'
import DropDown from './DropDown'
// Slider 
import Banner1 from '../assets/images/Banner1.jpg';
import Banner2 from '../assets/images/Banner2.jpg';
import SliderCollection from './SliderCollection';
// Feature
import FeaturesList from './FeaturesList';
// Products
import VRtech from '../assets/images/VR Tech @Home.jpg'
import AudioLearn from '../assets/images/Audio Visual Learning @Home.jpg'
import CapexEduc from '../assets/images/Capex EduCounsellor.jpg'
import CapexTeacher from '../assets/images/Canex Teacher @Home.jpg'
import ProductsCollection from './ProductsCollection'
// Committee
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
// CapexWhy
import CapexwhyIcon from "./CapexwhyIcon";
import TermsConditionComponent from './TermsConditionComponent'



// main navbar collections
const Icon = [{
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
    subTitle: "Gujarat"
}
]

// function to render the navbar data
export const getMainNavItems = () => {
    return (

        Icon.map((icon) => (
            <NavLinks key={icon.id} img={icon.img} title={icon.title} subTitle={icon.subTitle} flag={icon.flag} />
        ))
    )
}

// Sub Navbar Items
const dropDownLinks = [{
    title: "Home",
    id: 1,
    path: "/"
}, {
    title: "About",
    id: 2,
    path: "/about"
}, {
    title: "Products",
    id: 3,
    path: "",
    Links: [{
        id: 1,
        name: "Capex Teacher",
        link: "/capexteacher"
    },
    {
        id: 2,
        name: "VR Tech",
        link: "/vrtech"
    }, {
        id: 3,
        name: "Capex EduCounsellor",
        link: "/capexeducounsellor"
    }, {
        id: 4,
        name: "Audio Visual Learning",
        link: "/audiovisuallearning"
    }]
},
{
    title: "Fees Deposit",
    id: 4,
    path: "/deposit",
},
{
    title: "FAQ",
    id: 5,
    path: "/faq",
},
{
    title: "Our Association",
    id: 6,
    path: "/association",
},
{
    title: "ContactUs",
    id: 7,
    path: "/contactus"
}
]

// function to get sub-navbar (+dropdown) items
export const getDropDown = () => {
    return (
        dropDownLinks.map((dropdown) => (
            <DropDown path={dropdown.path} key={dropdown.id} title={dropdown.title} Links={dropdown.Links} />
        ))
    )
}
export const getMobileDropDown = () => {
    return (
        dropDownLinks.map((dropdown) => (
            <MobileDropDown path={dropdown.path} key={dropdown.id} title={dropdown.title} Links={dropdown.Links} />
        ))
    )
}


// SubNavbar FollowUs items
const followUs = [{ id: 1, icon: <FaFacebookF /> }, { id: 2, icon: <FaTwitter /> }, { id: 3, icon: <FaYoutube /> }]

// Function to get subNavbar followUS items
export const getFollowUs = () => {
    return (
        followUs.map((follow) => (
            <span className='cursor-pointer transition-all hover:shadow-md hover:text-blue-800 hover:bg-white p-3' key={follow.id}>{follow.icon}</span>
        ))
    )
}

// Slider Items
const sliderInfo = [{
    id: 1,
    img: Banner1,
    title: "Mission",
    subtitle: "To become biggest academic service provider company of india.",
    description: "'Our association with different colleges, edtech companies help us to serve out customers/parents'"
}, {
    id: 2,
    img: Banner2,
    title: "Why Us",
    subtitle: "We wish to strengthen basic education in out country with proper training and technology",
    description: "'Our association with different colleges, edtech companies help us to serve out customers/parents'"
}]

// function to get slider items
export const getSliderInfo = () => {
    return (
        sliderInfo.map((slider) => (
            <SliderCollection key={slider.id} img={slider.img} title={slider.title} subtitle={slider.subtitle} description={slider.description} />
        ))
    )
}

// Feature Items
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

//get function Features items
export const getFeatureList = () => {
    return (
        featureInfo.map((feature) => (
            <FeaturesList key={feature.id} icon={feature.icon} title={feature.title} description={feature.description} />
        ))
    )
}


// Products items 
const productInfo = [{
    id: 1,
    title: "Capex Teacher",
    subtitle: "Home tutor",
    icon: "flaticon-pencil",
    img: CapexTeacher
}, {
    id: 2,
    title: "VR Tech",
    subtitle: "Virtual Reality Device",
    icon: "flaticon-business-presentation",
    img: VRtech,
}, {
    id: 3,
    title: "Capex EduCounsellor",
    subtitle: "To know and decide learning style and learning habits of the child",
    icon: "flaticon-graduation-cap",
    img: CapexEduc
}, {
    id: 4,
    title: "Audio Visual Learning",
    subtitle: "To know and decide learning style and learning habits of the child",
    icon: "flaticon-pencil",
    img: AudioLearn
}]

// Function to get product items
export const getProduct = () => {
    return (
        productInfo.map((product) => (
            <ProductsCollection key={product.id} icon={product.icon} img={product.img} subtitle={product.subtitle} title={product.title} />
        ))
    )
}

// Committee items
const committeeInfo = [{
    id: 1,
    title: "Mrs. Shyamlaben Naik",
    img: inst1,
}, {
    id: 2,
    title: "Mr. Saurabh Patel",
    img: inst2,
}, {
    id: 3,
    title: "Dr. Sushil Naik",
    img: inst3,
}, {
    id: 4,
    title: "Mr. Nirav Nevaskar",
    img: inst4,
}, {
    id: 5,
    title: "Dr. Himanshu Patel",
    img: inst5,
}, {
    id: 6,
    title: "Mr. Vatsal Thakkar",
    img: inst6,
}, {
    id: 7,
    title: "Dr. Madhuri Raval",
    img: inst7,
}]

// function to get committee items
export const getCommitteeInfo = () => {
    return (
        committeeInfo.map((info) => (
            <CommitteeCollection key={info.id} title={info.title} img={info.img} />
        ))
    )
}

// Head Teacher
const headTeacherInfo = [{
    id: 1,
    title: "Mr. J.Rami",
    img: inst7
}, {
    id: 2,
    title: "Mr. Chirag Choksi",
    img: inst3
}, {
    id: 3,
    title: "Mrs. Sakshi Naik",
    img: inst2
},]

// function to get the head teachers
export const getHeadTeacherInfo = () => {
    return (
        headTeacherInfo.map((info) => (
            <CommitteeCollection key={info.id} title={info.title} img={info.img} />
        ))
    )
}

// Capex Teacher Items
const iconInfo = [{
    id: 1,
    title: "Teacher",
    description: "Qualified and Trained Teachers to teach your child ar your home."
},
{
    id: 2,
    title: "Mentor",
    description: "communicate with student, teacher and parent to track the progress."
},
{
    id: 3,
    title: "Teacher Head",
    description: "track the syllabus progress & guide the teacher (Home Tutor)."
},
{
    id: 4,
    title: "Counsellor",
    description: "Conduct online webinar to motivate your child"
},
]

// function to get the capex teacher items
export const getIcon = () => {
    return (
        iconInfo.map((icon) => (
            <CapexAboutIcon key={icon.id} title={icon.title} description={icon.description} />
        ))
    )
}

// footer items
const iconCollection = [{
    id: 1,
    icon: "fa-location-crosshairs",
    title: "Vatva Ahmedabad, Gujarat"
}, {
    id: 2,
    icon: "fa-envelope",
    title: "edurenacademic@gmail.com"
}, {
    id: 3,
    icon: "fa-phone",
    title: "8511222507,8488829699"
}]
const footerList = [{
    id: 1,
    flag: true,
    title: "Useful Links:",
    icons: [{
        id: 1,
        title: "Home",
        icon: "fa-link",
        link: "/"
    },
    {
        id: 2,
        title: "About Us",
        icon: "fa-link",
        link: "/about"
    },
    {
        id: 3,
        title: "Terms and Condition",
        icon: "fa-link",
        link: "/termsandconditions"
    },
    {
        id: 4,
        title: "Contact Us",
        icon: "fa-link",
        link: "/contactus"
    }, {
        id: 5,
        title: "Disclaimer",
        icon: "fa-link",
        link: "/disclaimer"
    }
    ]
}, {
    id: 2,
    title: "Official Info:",
    icons: iconCollection
}, {
    id: 3,
    title: "Products",
    icons: [{
        id: 1,
        title: "Capex Teacher",
        icon: "fa-link",
        link: "/capexteacher"
    },
    {
        id: 2,
        title: "VR Tech",
        icon: "fa-link",
        link: "/vrtech"
    }, {
        id: 3,
        title: "Capex EduCounsellor",
        icon: "fa-link",
        link: "/capexeducounsellor"
    }, {
        id: 4,
        title: "Audio Visual Learning",
        icon: "fa-link",
        link: "/audiovisuallearning"
    },
    ]

}]

//function to get footer items
export const getFooterList = () => {
    return (
        footerList.map((info) => (
            <FooterList title={info.title} flag={info.flag} icons={info.icons} key={info.id} />
        ))
    )
}



// contact us symbol
export const getContactIcons = () => {
    return (
        iconCollection.map((icon) => (
            <div key={icon.id} className="flex items-center  mb-4 text-2xl ">
                <i className={`fas ${icon.icon} mr-3 p-3 bg-yellow-400 rounded-lg text-white shadow-md text-center`}></i>
                <p className='text-2xl sm:text-3xl  font-bold font-sans text-blue-500'>{icon.title}</p>
            </div>
        ))
    )
}



//FAQ Data
const faqData = [
    {
        title: '1) Is the Teacher who will come to tach my child at Home, is Experienced ?',
        content: 'Of course. We select teacher after proper verification and  interview. Only experienced teachers are sent to teach at Home.',
    },
    {
        title: '2) What are the other benefits if we get capax Teacher @ Home ?',
        content: ' Parents will get Mentor  & Head Teacher along with Home Tutor. Online webinar of our counsellor will also help the child.',
    }, {
        title: '3) What is  the Role of the Mentor ?',
        content: 'Mentor will Track the progress of the child and regularly communicate with Parent, Student and Teacher.',
    }, {
        title: '4) What are the student welfare Webinar and Seminars about ?',
        content: 'It’s a Value added services for students overall development.',
    }, {
        title: '5) What to do if Home Tutor ? Teacher is not coming regularly at Home ?',
        content: 'company track the regularity and punctuality of the Teacher. In any such situation company may provide equally capable teacher.',
    }, {
        title: '6) How can my child compete with other students ?',
        content: ' If students and Parents demand we can conduct Common Test for all students registered.',
    }, {
        title: '7) What will be the Test and Exam schedule ? ',
        content: 'Teacher is responsible to take weekly Test of your child.',
    }, {
        title: '8) How can Parents come to know about their child’s Progress ?',
        content: 'Our Mentor talk with Parents to inform them. Along with this A Record Card is also at Parents Home which is regularly signed by Teacher and Parent or Gardian.',
    }, {
        title: '9) How can we communicate with Teacher and Mentor ?',
        content: 'A common WhatsApp group will generated for easy and transparent communication.',
    }, {
        title: '10) When Parents need to pay the Fees ? ',
        content: ' Fees is to be paid Online only into Company’s current account , that is 60 % fees after Three lectures taken by the Teacher.  Remaining 40 % will according to schedule given by company.',
    }, {
        title: '11) What is the Refund policy ?',
        content: 'If Parents are not convenient with the  Home teaching service, Fees will be Refunded in parents account after deduction. Such Deduction includes Teachers salary and company’s operation charges.',
    },
    {
        title: '12) What if due to any reason like students sickness or any social activity we could not get teaching service for some time ?',
        content: ' We  might try to compensate the lectures by arranging extra timings but it will strictly as par Teachers convenience , No provision of reducing Fees once decided.',
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


// Capex Why function to get the icons
export const getwhyiconInfo = () => {
    return whyIconInfo.map((iconwhy) => (
        <CapexwhyIcon
            key={iconwhy.id}
            title={iconwhy.icon}
            description={iconwhy.description}
        />
    ));
};

// terms and condition for parents items collections

const termsConditionCollection = [{
    id: 1,
    description: "On the basis of Parent-Student requirement Service Contract for Teaching will be form and Teaching schedule will be  commenced and strictly conducted according to it."
},
{
    id: 2,
    description: "Mode of Fees Payment is through NEFT/IMPS directly into company account in HDFC Bank only.  No CASH transaction."
},
{
    id: 3,
    description: "Parents should allow teacher in Home with I-Card only."
},
{
    id: 4,
    description: "Either Parents or Guardian must present at home during teaching hours."
},
{
    id: 5,
    description: "Parents should not offer teacher for personal coaching, in such case all Benefits of co- curricular activities will be ceased without Notice."
},

{
    id: 6,
    description: "Teaching must be in front of any family member."
},
{
    id: 7,
    description: "All communications regarding student leave , timing change  and Progress will be in WhatsApp group only."
},
{
    id: 8,
    description: "To get Benefits of co-curricular activities parents & student need to manage time according to schedule decided by company . No changes are possible as per parent's conveniency."
},
{
    id: 9,
    description: "In the case of extra teaching other then Text book  or Reference books solving sessions , Parents have to pay Extra fees to company."
},
{
    id: 10,
    description: "This service contract is based on number of sessions only ( 90-120 min. each )"
},

{
    id: 11,
    description: "If standard time period exceeds for completion of syllabus, which is given by company at the commencement of contract, extra fees is to be paid."
},
{
    id: 12,
    description: "WhatsApp or Text message or chatting is not  allowed with teacher."
},
{
    id: 13,
    description: "No teaching material will be provided by company."
},
{
    id: 14,
    description: "Weekly test should be super visioned  by parents or can ask as a value added service."
},
{
    id: 15,
    description: "Parents must sign in Schedule Card given from Company  after every lecture and send the photo copy of it  every week on Company whatsapp number."
},
{
    id: 16,
    description: "All Teaching schedule will be Calculated according to Schedule Card only,  in the case of Complain or Grievance."
},
]

export const getTermsAndCondition = () => {
    return (
        termsConditionCollection.map((terms) => (
            <TermsConditionComponent key={terms.id} {...terms} />
        ))
    )
}

// grievance 
const grievanceHandlersCollections = [{
    id: 1,
    title: "Dr. Madhuri Raval",
    handle: "Region Head Eduren"
},
{
    id: 2,
    title: "Dr. Sushi Naik",
    handle: "Recruitment and Teacher Training"
}, {
    id: 3,
    title: "Dr. Himanshu Patel",
    handle: "Legal"
},
]
// grievance function to get the collection
export const getGrievanceHandler = () => {
    return (
        grievanceHandlersCollections.map((items) => (
            <p className='mt-3 font-semibold text-yellow-600 text-xl'>{items.id}. {items.title} : {items.handle}</p>
        ))
    )
}