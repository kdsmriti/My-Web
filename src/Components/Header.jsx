import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";
import './Layout.css'

const Header = () => {
  return (
    <>
    <div className='Header1'>
        <div className="Connect"><FaWhatsapp />+977-9816026257 </div>
        <div className='Connect'><MdMarkEmailUnread />courierinfo256@gmail.com</div>
        <div className='Connect1'> 
        <IoPersonCircleSharp />
          <button>Login</button>
          <button>SignUp</button>
          </div>
        </div>
        <div className='Header2'>
          <ul>
            <li>Home</li>
            <li>Tracking</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Blogs</li>
            <li>Contact Us</li>
            <li>Franchise</li>

          </ul>
        </div>
        </>
  )
}

export default Header