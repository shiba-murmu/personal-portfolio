import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Experience from './Experience/Experience'
import Resume from './Resume/Resume'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import Aboutme from './Aboutme/Aboutme'

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Aboutme />
            <Skills />
            <Projects />
            <Experience />
            <Resume />
            <Contact />
            <Footer />
        </>
    )
}

export default App