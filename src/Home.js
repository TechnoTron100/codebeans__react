import React from 'react'
import Hero from './components/Hero'
import Partners from './components/Partners'
import Services from './components/Services'
import Courses from './components/Courses'
import About from './components/About'
import Team from './components/Team'
import Contact from './components/Contact'
import Projects from './components/Projects'


function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <About />
      <Services />
      <Courses />
      {/* <Projects /> */}
      <Team />
      <Contact />
    </>
  )
}

export default Home