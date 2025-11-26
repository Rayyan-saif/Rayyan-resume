import React from 'react'
import Hero from '../Hero'
// import Aboute from '../Aboute'
import Skills from '../Skills'
import Projects from '../Projects'
import Contact from '../Contact'
import Services from '../Services'
import DarkModeToggle from '../DarkModeToggle'
import Testimonial from '../Testimonial'
import About from '../About'

const Home = () => {
  return (
    <main>
        <Hero/>
        <About/>
        <Skills/>
        <Services/>
        <Projects/>
        <Testimonial/>
        <Contact/>
    </main>
  )
}

export default Home