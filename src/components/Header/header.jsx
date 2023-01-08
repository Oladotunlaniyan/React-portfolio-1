import React from 'react'
import CTA from './CTA'
import'./header.css'
import ME from "../../assets/me.png"
import HeaderSocials from './HeaderSocials'


const header = () => {
  return (
    <header>
        <div className="container header_container">
            <h5>Hello I'm</h5>
            <h1>Abdul-Qawi Laniyan</h1>
            <h5 className="text-light">Front-end Developer</h5>
            <CTA />
            <HeaderSocials />


            <div className="me">
                <img src={ME} alt="me" />
            </div>
            <a href="#contact" className='scroll_down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default header;