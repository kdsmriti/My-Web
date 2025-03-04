import React from 'react'
import{Link} from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';




const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="footer-logo">
            <img src='Images/Logo.jpeg'
            alt='logo'>
            </img>
            < p className='text'> One Step solution to your parcels</p>
            </div>
    <div className="Content2">
         Quick Links
         <ul className='Quicklinks'>
            <li><Link to ='/'> Home</Link></li>
            <li><Link to ='/services'>Services</Link></li>
            <li><Link to ='/tracking'>Tracking</Link></li> 
            <li><Link to ='/franchise'>Franchise</Link></li> 
            <li><Link to ='/blogs'>Blogs</Link></li> 

         </ul>
    </div>
    <div className="Content3">
        Get In Touch
        <p>Damak-05,Jhapa Beldagi Road </p>
        <p>+977- 023580777</p>
        <div className="Icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter/>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram/>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin/>
          </a>
        </div>
    </div>
     </div>
    <div className="Footer2">
        copyright@techdebugger2025</div></>
  )
}

export default Footer