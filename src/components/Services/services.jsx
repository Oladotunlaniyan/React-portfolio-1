import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
 
const services = () => {
  return (
    <section id='services'>
     <h5>What I Can Offer </h5>
     <h2>Services</h2>
     
     <div className="container services_container">
      <article className='service'>
        <div className="service_head">
          <h3>UI/UX Design</h3>
        </div>

        <ul className='service_list'>
          <li>
            <BiCheck  className='service_list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck  className='service_list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck  className='service_list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck  className='service_list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck  className='service_list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck  className='service_list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
          </li>
        </ul>
      </article>
      {/*=============End of UI/UX section===================*/}

      {/*================= Web Development section===========*/}
      <article className='service'>
        <div className="service_head">
          <h3>Web Development</h3>
        </div>

        <ul className='service_list'>
          <li>
            <BiCheck  className='service_list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck  className='service_list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck  className='service_list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck  className='service_list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck  className='service_list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck  className='service_list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck  className='service_list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
          </li>
        </ul>
      </article>
      {/*============End of Web development Section=======================*/}
      {/*============Start of Web development Section=======================*/}
      <article className='service'>
        <div className="service_head">
          <h3>Content Creation</h3>
        </div>

        <ul className='service_list'>
          <li>
            <BiCheck  className='service_list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck  className='service_list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck  className='service_list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck  className='service_list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck  className='service_list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BiCheck  className='service_list-icon'/>
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
          </li>
        </ul>
      </article>
      {/*===================End of Content Creation===================*/}
     </div>
    </section>
  )
}

export default services