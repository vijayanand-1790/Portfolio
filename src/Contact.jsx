import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import ContactImg from './assets/phoneYellow.png'
import { FaFacebook, FaGithub, FaLinkedin, FaPhone, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { motion } from "motion/react";

const Contact = () => {

  // const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [ErrorMsg, setErrorMsg] = useState("")
  const [SuccessMsg, setSuccessMsg] = useState("")

  const emailValidation = (email) => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (name === '') {
      setErrorMsg('Please enter your Name!')
    }
    else if (email === '') {
      setErrorMsg("Please enter your Email!")
    }
    else if (!emailValidation(email)) {
      setErrorMsg("Enter a valid Email!")
    }
    else if (message === '') {
      setErrorMsg("Please enter your Message!")
    }
    else {

      emailjs.sendForm('service_lxtmu8p', 'template_yaoao0l', form.current, {
        publicKey: 'cxRtZF_Ramors7pFO',
      })

        .then(
          () => {
            setSuccessMsg(`Thank you ${name}, Your message has been sent successfully!`)
            setName('')
            setEmail('')
            setMessage('')
            setErrorMsg('')
          },
        )
        .catch((error) => {
          console.log(error);

          setErrorMsg("Something went wrong. Please try again later.");
          setSuccessMsg('');
        })

    }

  };

  return (

    <div id='contact' className='text-black bg-neutral-200 overflow-x-hidden'>
      <h1 className='text-black md:text-6xl text-4xl font-bold text-center md:pt-5 pt-3'>Contact Me</h1>
      <p className='flex px-4 justify-center items-center md:pt-3 pt-1'>Get in touch with me</p>

      <div className='max-w-7xl flex md:flex-row flex-col justify-center items-center mx-auto md:pt-10 pt-6 md:pb-30 pb-22'>
        <motion.form
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1, duration: 1 }}
          ref={form} onSubmit={sendEmail} className='md:w-[60%] w-full flex flex-col md:px-15 px-5 md:gap-5 gap-3'>
          <label className='text-xl font-semibold'>Name</label>
          <input type="text" name="user_name" onChange={(e) => setName(e.target.value)} value={name} placeholder='Name' className='outline-2 p-4 rounded-xl' />
          <label className='text-xl font-semibold'>Email</label>
          <input type="email" name="user_email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Email' className='outline-2 p-4 rounded-xl' />
          {/* <label className='text-xl font-semibold'>Subject</label>
          <input name="subject" type="text" placeholder="Subject" className='outline-1 outline-white p-4 rounded-xl'/> */}
          <label className='text-xl font-semibold'>Message</label>
          <textarea rows={4} cols={35} name="message" onChange={(e) => setMessage(e.target.value)} value={message} placeholder='Write your message...' className='outline-2 p-4 rounded-xl' />
          <input type="submit" value="Send Message" className='bg-blue-600 hover:bg-blue-700 duration-300 p-3 rounded-xl text-white text-xl font-semibold mt-2 cursor-pointer' />

          {
            ErrorMsg && <p className='md:text-lg text-base text-red-400 font-semibold animate-bounce'> {ErrorMsg} </p>
          }

          {
            SuccessMsg && <p className='md:text-lg text-base text-green-400 font-semibold animate-bounce'> {SuccessMsg} </p>
          }


        </motion.form>

        {/* Right side */}

        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3, duration: 1 }}
          className='md:w-[40%] w-full md:px-15 px-5 md:pt-0 pt-10'>
          <img src={ContactImg} className='md:w-70 w-45' alt="" />
          <p className='md:text-2xl text-xl font-semibold mb-3 mt-12'>Connect With Me Anytime On</p>
          <div className='flex items-center gap-3 mt-2'>
            <FaPhoneAlt size={20} />
            <p className='text-lg'>+91 9884127840</p>
          </div>
          <div className='flex items-center gap-3 mt-2'>
            <MdEmail size={20} />
            <p className='text-lg'>vijayvjrj@gmail.com</p>
          </div>

          <div className='mt-8'>
            <p className='md:text-2xl text-xl font-semibold mb-3'>Find Me On</p>
            <div className='flex gap-5'>
              <a href="https://linkedin.com/in/vijay-anand-4a206a374/" target='_blank' rel="noopener noreferrer" className='hover:translate-y-1.5 duration-200'><FaLinkedin size={35} /></a>
              <a href="https://github.com/vijayanand-1790" target='_blank' rel="noopener noreferrer" className='hover:translate-y-1.5 duration-200'><FaGithub size={35} /></a>
            </div>
          </div>

        </motion.div>

      </div>

    </div>
  )
}

export default Contact