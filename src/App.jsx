import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Resume from './components/resume/Resume'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <>
        <Header/>
        <About/>
        <Skills/>
        <Resume/>
        <Portfolio/>
        <Contact/>
    </>
  )
}

export default App