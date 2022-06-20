import React, { useState, useRef } from 'react'
import { getContactIcons, getGrievanceHandler } from './allData';
import InputFields from './InputFields';
import emailjs from 'emailjs-com'
const ContactUsComponent = () => {
  const form = useRef();
  const [contact, setContact] = useState({
    fullname: "",
    email: "",
    phone: "",
    msg: "",
  })
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // email js for sending the email to us.
    emailjs.sendForm('service_b940hi9', 'template_3dvtebt', form.current, 'gq4nwM8TH4MMpsFdK')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    setContact({ fullname: '', email: '', phone: '', msg: '' })
  }
  // input collections
  const inputFieldCollection = [{
    id: 1,
    value: contact.fullname,
    name: "fullname",
    placeholder: "Your Name",
    type: "text",
    handleChanges,
  }, {
    id: 2,
    value: contact.email,
    name: "email",
    placeholder: "Your Email Address",
    type: "email",
    handleChanges,
  }, {
    id: 3,
    value: contact.phone,
    name: "phone",
    placeholder: "Your Phone Number",
    type: "text",
    handleChanges,
  },]

  // to get the values from input collection fields
  const getInputFields = () => {
    return (
      inputFieldCollection.map((fields) => (
        <InputFields key={fields.id} {...fields} />
      ))
    )
  }

  return (
    <>
      <h1 className="text-center mt-10 text-5xl  font-semibold font-sans">Contact Us</h1>
      <div className='flex justify-evenly mt-10  flex-wrap gap-3 p-3'>
        <div className='flex flex-col flex-wrap'>
          <h1 className='text-3xl text-blue-500 font-sans font-bold text-center md:text-left'>Write us a message</h1>
          <form ref={form} onSubmit={handleSubmit} className='mt-5 p-5 rounded-md shadow-lg bg-yellow-300 shadow-yellow-500/40   flex flex-col gap-3'>
            <div className='flex gap-3 justify-evenly flex-wrap'>
              {getInputFields()
              }
            </div>
            <div className='flex mt-4'>
              <textarea name="msg" value={contact.msg} id="" col="" rows="10" className='font-semibold shadow-md placeholder:font-normal w-full p-4 bg-slate-100 rounded-sm text-lg' placeholder='Write your message here ' required resize="off" onChange={handleChanges}></textarea>
            </div>
            <button className='w-full flex justify-center items-center font-semibold text-white bg-blue-500 rounded-md shadow-md shadow-blue-500/60 p-3 text-xl hover:bg-white hover:shadow-white hover:text-blue-500'>Submit <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg> </button>
          </form>
        </div>
        <div className="flex-col  mt-10 md:flex justify-start ">
          <h1 className='text-yellow-400 text-center font-bold mb-5 text-3xl sm:text-4xl font-sans'>In the case of any grievance</h1>
          {getContactIcons()}
          {getGrievanceHandler()}
        </div>
      </div>
      {/* map */}
      <div className='flex mt-28'>
        <iframe title='google map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.915884647191!2d72.52209801481632!3d23.026860484950973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85225657f1f1%3A0x6a25eb4793de50f!2sThe%20Pioneer%20Tech%20-%20Website%20and%20Application%20Development%20Company%20in%20Ahmedabad!5e0!3m2!1sen!2sin!4v1655455179549!5m2!1sen!2sin" className='border-0 w-full h-[400px]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  )
}

export default ContactUsComponent