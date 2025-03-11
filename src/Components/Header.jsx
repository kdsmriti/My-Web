import React, {useState} from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { MdMarkEmailUnread } from 'react-icons/md'
import { IoPersonCircleSharp } from 'react-icons/io5'
import './Layout.css'
import { Outlet,NavLink } from 'react-router-dom'

const Header = () => {
  const [isLogin, setLogin] = useState();
  const [isHeader2Visible,setIsHeader2Visible]=useState(true);
  const handleLogin=()=>{
    setLogin(true);
    setIsHeader2Visible(false);
  }
  const handleSignUp=()=>{
    setLogin(false);
    setIsHeader2Visible(false);
}
  return (
    <>
    <div className='Header1'>
        <div className="Connect"><FaWhatsapp />+977-9816026257 </div>
        <div className='Connect'><MdMarkEmailUnread />courierinfo256@gmail.com</div>
      <div className="Header-Top"><IoPersonCircleSharp /></div>
      <div className="Form-Toggle"> 
        <NavLink to ='/login'><button  className={isLogin ? 'active' : ''}onClick={handleLogin}>Login</button></NavLink>
        <NavLink to='/signup'><button className={!isLogin ? 'active' : ''} onClick={handleSignUp} >SignUp</button></NavLink>
      </div>
      </div>
        <div className={isHeader2Visible?"Header2":"hide"}>
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