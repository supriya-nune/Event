import React from 'react'
//   import {./Facebook } from 'react-icons/fa';
import { SocialIcon } from 'react-social-icons'
import './styles/Footer.css';
  export default function Footer() {
    return (
        <div className='footer'>
        <div className="footer-col">
         <h4>follow us</h4>
         <div className="social-links">
         <SocialIcon network='facebook' bgColor='black' href='https://www.facebook.com/ProdevansTechnologies/'/>
         <SocialIcon network='instagram' bgColor='black' href='https://www.instagram.com/prodevans.l/'/>
         <SocialIcon network='linkedin' bgColor='black' href='https://www.linkedin.com/company/prodevans-technologies/mycompany/'/>
         <SocialIcon network='google'bgColor='black' href='https://www.prodevans.com/'/>
         </div>
       </div>
     </div>
    )
  }