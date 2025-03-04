import React, {useState} from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { MdMarkEmailUnread } from 'react-icons/md'
import { IoPersonCircleSharp } from 'react-icons/io5'
import './Layout.css'
import { Outlet,NavLink } from 'react-router-dom'

const Header = () => {
  const [isLogin, setLogin] = useState(false);
  return (
    <>
    <div className='Header1'>
        <div className="Connect"><FaWhatsapp />+977-9816026257 </div>
        <div className='Connect'><MdMarkEmailUnread />courierinfo256@gmail.com</div>
      <div className="Header-Top"><IoPersonCircleSharp /></div>
      <div className="Form-Toggle"> 
        <button className={isLogin ? 'active' : ''} onClick={() => setLogin(true)}>Login</button>
        <button className={!isLogin ? 'active' : ''} onClick={() => setLogin(false)}>SignUp</button>
      </div>
      </div>
        <div className='Header2'>
          <ul>
          <li>
            <NavLink to ='/'className={({isActive})=>isActive? "active-link":""}>
            Home
            </NavLink>
            </li>
            <li>
            <NavLink to ='/services'className={({isActive})=>isActive? "active-link":""}>
            Services
            </NavLink>
            </li>
            <li>
            <NavLink to ='/tracking'className={({isActive})=>isActive? "active-link":""}>
            Tracking
            </NavLink>
            </li>
            <li>
            <NavLink to ='/franchise'className={({isActive})=>isActive? "active-link":""}>
            Franchise
            </NavLink>
            </li>
            <li>
            <NavLink to ='/blogs'className={({isActive})=>isActive? "active-link":""}>
            Blogs
            </NavLink>
            </li>
            <li>
            <NavLink to ='/aboutus'className={({isActive})=>isActive? "active-link":""}>
            About Us
            </NavLink>
            </li>
            <li>
            <NavLink to ='/contactus'className={({isActive})=>isActive? "active-link":""}>
            Contact Us
            </NavLink>
            </li>
          </ul>
           
        </div>
        </>
  )
  
}

export default Header