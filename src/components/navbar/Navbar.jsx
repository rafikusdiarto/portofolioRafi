import React from 'react'
import './navbar.css'
import {Link } from "react-router-dom";

const nav = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg shadow-lg mb-5">
        <div class="container-fluid">
          <a class="navbar-brand ms-5" href="#"><b>Rafi.</b></a>
          <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end me-5" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/portfolioDetail">Portfolio</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default nav