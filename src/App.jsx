import React from 'react'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Resume from './components/resume/Resume'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import PortfolioDetail from './components/portfolioDetail/PortfolioDetail'
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/portfolioDetail' element={<PortfolioDetail/>}/>
        {/* <Route path='/' element={<Skills/>}/>
        <Route path='/' element={<Resume/>}/>
        <Route path='/' element={<Portfolio/>}/>
        <Route path='/' element={<Contact/>}/>
        <Route path='/' element={<Footer/>}/> */}
      </Routes>
    </>
  )
}

export default App