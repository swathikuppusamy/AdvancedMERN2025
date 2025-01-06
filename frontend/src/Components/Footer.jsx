import React from 'react'
import "../assets/Footer.css"
const Footer = () => {
  return (
    <div>
            <footer>
            <h3>This is footer </h3>
            <div className='col'>
                <ul>
                    <li>Press Inquiries</li>
                    <li>Support</li>
                    <li>Status</li>
                    <li>Availability</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                    <li>YouTube</li>
                </ul>
             </div>
                <div className='col'>
                <ul>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>Usage Policy</li>
                    <li>Responsible Disclosure Policy</li>
                    <li>Compliance</li>
                    <li>Privacy Choices</li>
                </ul>
               </div>
          </footer>
    </div>
  )
}

export default Footer;
