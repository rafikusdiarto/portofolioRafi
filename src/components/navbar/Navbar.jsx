import React from 'react'
import './navbar.css'
import {Link } from "react-router-dom";
import { useState, useEffect } from 'react';

const Nav = () => {
const [navbar,setNavbar] = useState(false);

const changeBackground=() =>{
  if(window.scrollY > 0){
    setNavbar(true)
  }
  else{
    setNavbar(false)
  }
};

useEffect(() => {
  changeBackground()
  window.addEventListener("scroll", changeBackground)
})

  return (
    <>
      <nav class={navbar ? "navbar active sticky-top navbar-expand-lg" : 'navbar'}>
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><b>Rafi.</b></a>
          <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <ul class="navbar-nav">
            <li>
              <Link to="/" style={{textDecoration: 'none'}}>Home</Link>
              <Link to="/portfolioDetail" style={{textDecoration: 'none'}}>Portfolio</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav