// <Import Start>
import React from 'react'
import About from './components/About/about'
import Header from './components/Header/header'
import Portfolio from './components/Portfolio/portfolio'
import Nav from './components/Nav/nav'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'
import Experience from './components/Experience/experience'
import Services from './components/Services/services'
import Testimonials from './components/Testimonials/testimonials'
// <Import End>



const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About/>
      <Experience />
      <Services/>
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;