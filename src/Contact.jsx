import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ContactImg from './assets/phoneYellow.png';
import { FaLinkedin, FaGithub, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { motion } from "motion/react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [ErrorMsg, setErrorMsg] = useState("");
  const [SuccessMsg, setSuccessMsg] = useState("");

  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name) setErrorMsg('Please enter your Name!');
    else if (!email) setErrorMsg("Please enter your Email!");
    else if (!emailValidation(email)) setErrorMsg("Enter a valid Email!");
    else if (!message) setErrorMsg("Please enter your Message!");
    else {
      emailjs.sendForm('service_lxtmu8p', 'template_yaoao0l', form.current, {
        publicKey: 'cxRtZF_Ramors7pFO',
      })
      .then(() => {
        setSuccessMsg(`Thank you ${name}, Your message has been sent successfully!`);
        setName('');
        setEmail('');
        setMessage('');
        setErrorMsg('');
      })
      .catch(() => {
        setErrorMsg("Something went wrong. Please try again later.");
        setSuccessMsg('');
      });
    }
  };

  return (
    <section id="contact" className="bg-[#0B1623] text-[#E4E8F1] overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center px-6 md:px-10 py-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold"><span className="text-[#00A8FF]">Contact</span> Me</h1>
          <p className="text-[#A9B4C4] mt-2">Get in touch with me</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-start w-full gap-10">
          {/* Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1, duration: 1 }}
            className="md:w-2/3 w-full flex flex-col gap-5"
          >
            <label className="text-lg font-semibold">Name</label>
            <input
              type="text"
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="p-4 rounded-xl bg-[#111C2D] border shadow-[0_0_15px_rgba(0,168,255,0.2)] hover:shadow-[0_0_25px_#00A8FF] text-[#E4E8F1] outline-none focus:border-[#00A8FF] duration-300"
            />

            <label className="text-lg font-semibold">Email</label>
            <input
              type="email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="p-4 rounded-xl bg-[#111C2D] border shadow-[0_0_15px_rgba(0,168,255,0.2)] hover:shadow-[0_0_25px_#00A8FF] text-[#E4E8F1] outline-none focus:border-[#00A8FF] duration-300"
            />

            <label className="text-lg font-semibold">Message</label>
            <textarea
              rows={5}
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message..."
              className="p-4 rounded-xl bg-[#111C2D] border shadow-[0_0_15px_rgba(0,168,255,0.2)] hover:shadow-[0_0_25px_#00A8FF] text-[#E4E8F1] outline-none focus:border-[#00A8FF] duration-300"
            />

            <input
              type="submit"
              value="Send Message"
              className="mt-2 p-3 rounded-xl bg-[#00A8FF] hover:bg-[#00C3FF] text-white font-semibold text-lg cursor-pointer shadow-md hover:shadow-[0_0_15px_#00A8FF] duration-300"
            />

            {ErrorMsg && <p className="text-red-400 font-semibold animate-bounce">{ErrorMsg}</p>}
            {SuccessMsg && <p className="text-green-400 font-semibold animate-bounce">{SuccessMsg}</p>}
          </motion.form>

          {/* Right Side Info */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3, duration: 1 }}
            className="md:w-1/3 w-full flex flex-col items-center gap-6"
          >
            <img src={ContactImg} alt="Contact" className="w-60 md:w-72" />
            <div className="flex flex-col items-center gap-3 mt-6">
              <p className="text-lg md:text-xl font-semibold">Connect With Me Anytime On</p>
              <div className="flex items-center gap-3">
                <FaPhoneAlt />
                <span className="text-[#E4E8F1]">+91 9884127840</span>
              </div>
              <div className="flex items-center gap-3">
                <MdEmail />
                <span className="text-[#E4E8F1]">vijayvjrj@gmail.com</span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 mt-6">
              <p className="text-lg md:text-xl font-semibold">Find Me On</p>
              <div className="flex gap-5 mt-2">
                <a href="https://linkedin.com/in/vijay-anand-4a206a374/" target="_blank" rel="noopener noreferrer" className="hover:translate-y-1.5 shadow-[0_0_15px_rgba(0,168,255,0.2)] hover:shadow-[0_0_25px_#00A8FF] duration-200">
                  <FaLinkedin size={35} />
                </a>
                <a href="https://github.com/vijayanand-1790" target="_blank" rel="noopener noreferrer" className="hover:translate-y-1.5 shadow-[0_0_15px_rgba(0,168,255,0.2)] hover:shadow-[0_0_25px_#00A8FF] duration-200">
                  <FaGithub size={35} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
