import React from 'react'
import './header.css'

const Header = () => {
  return (
    <>

      {/* hero */}
      <section id="hero" class="d-flex flex-column align-items-center justify-content-center">
        <h1>Hi, I'm Rafi</h1>
        <h2>I am a "Bismillah" Web Developer</h2>
        <a href="#about" class="btn-get-started scrollto"><i class="bi bi-chevron-double-down"></i></a>
      </section>
      {/* akhir hero */}

      {/* <!-- ======= Header ======= --> */}
      <header id="header" class="d-flex align-items-center bg-light">
          <div class="container d-flex align-items-center justify-content-between">

          <div class="logo">
              <h1><a href="index.html">M. Rafi Kusdiarto</a></h1>
              {/* <!-- Uncomment below if you prefer to use an image logo --> */}
              {/* <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>--> */}
          </div>

          <nav id="navbar" class="navbar">
              <ul>
              <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a class="nav-link scrollto" href="#about">About</a></li>
              <li><a class="nav-link scrollto" href="#resume">Resume</a></li>
              <li><a class="nav-link scrollto" href="#services">Services</a></li>
              <li><a class="nav-link scrollto" href="#portfolio">Portfolio</a></li>
              <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
              </ul>
              <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
          {/* <!-- .navbar --> */}

          </div>
      </header>
      {/* <!-- End Header --> */}

    </>
  )
}

export default Header