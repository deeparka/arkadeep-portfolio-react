import React from 'react'
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import github from "../images/github.png";
import whatsapp from "../images/whatsapp.png";
import gmail from "../images/gmail.png";

function ContactDrawer() {
  return (
    <div className='fixed top-180px left-2 w-auto h-auto p-5 rounded-xl bg-customGrey z-40'>
         <img src={linkedin} alt="Gmail" className="h-16 w-16" />
         <img src={github} alt="Gmail" className="mt-3 h-16 w-16" />
         <img src={twitter} alt="Gmail" className="mt-3 h-16 w-16" />
         <img src={gmail} alt="Gmail" className="mt-3 h-16 w-16" />
         <img src={whatsapp} alt="Gmail" className="mt-3 h-16 w-16" />
    </div>
  )
}

export default ContactDrawer