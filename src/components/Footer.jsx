import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";

 const Footer = () => {
 const currentYear= new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-white text-center py-4">
    <div className="footer-content md:flex  block  md:justify-between items-center px-6">
      <p className='text-[12px] md:text-[20px] py-4 md:py-0'>&copy; {currentYear} Your Company. All rights reserved.</p>
      <div className='flex items-center justify-center gap-2 group hover:scale-110 transition-all ease-in-out duration-300'>
        <a href="#" className="text-white hover:underline mx-2">
            <FaLinkedin className='text-[30px] ' />
        </a> 
        <a href="#" className="text-white hover:underline mx-2">
            <FaInstagramSquare className='text-[30px] ' />
        </a> 
        <a href="#" className="text-white hover:underline mx-2">
           <FaGithubSquare  className='text-[30px] '/>
        </a>
        <a href="#" className="text-white hover:underline mx-2">
           <MdOutgoingMail className='text-[30px] '/>
        </a>
      </div>
      <p className='py-4 flex justify-center items-center'>
        <a href="#" className="text-white hover:underline text-[12px] md:text-[20px] mx-2">Privacy Policy</a> |
        <a href="#" className="text-white hover:underline text-[12px] md:text-[20px] mx-2">Terms of Service</a> |
        <a href="#" className="text-white hover:underline text-[12px] md:text-[20px] mx-2">Contact Us</a>
      </p>
    </div>
  </footer>
  )
}

export default Footer