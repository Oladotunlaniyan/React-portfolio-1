import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className="about_me">
          <div className="about_me-image">
             <img src={ME} alt="About Image" />
          </div>

       </div>
       <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
                   <FaAward className='about_icon'/>
                   <h5>Experience</h5>
                   <small>2+ Years Working</small>
            </article>
            <article className='about_card'>
                   <FiUsers className='about_icon'/>
                   <h5>Clients</h5>
                   <small>05+ Clients Worldwide</small>
            </article>
            <article className='about_card'>
                   <VscFolderLibrary className='about_icon'/>
                   <h5>Projects</h5>
                   <small>30+ Completed Projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Iste nemo quas dignissimos inventore est architecto libero eius veritatis vitae, quibusdam voluptate ea unde maxime ipsam assumenda fuga tempore laudantium doloribus!
          </p>

          <a href="#contact" className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about