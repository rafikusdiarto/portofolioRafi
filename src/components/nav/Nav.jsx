import React from 'react'
import './nav.css'
import Spinner from 'react-bootstrap/Spinner';



const nav = () => {
  return (
    <>
    <Spinner animation="grow" />;
      <nav class="navbar navbar-expand-lg fixed-top bg-secondary justify-content-between">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#"><b>Rafi.</b></a>
          <ul>
            <li>
              <a class="nav-link" href="#">Home</a>
            </li>
            <li>
              <a class="nav-link" href="#">Portofolio</a>
            </li>
          </ul>
        <div class="btn-group" role="group">
          <a class="nav-link" href="https://github.com/rafikusdiarto/rafiescobar"><i class="fa-brands fa-github fa-5x"></i></a>
          <a class="nav-link" href="https://web.facebook.com/profile.php?id=100005698544779"><i class="fa-brands fa-facebook-f"></i></a>
          <a class="nav-link" href="https://www.instagram.com/muhmmad.rafii/"><i class="fa-brands fa-instagram"></i></a>
          <a class="nav-link" href="https://www.linkedin.com/in/muhammad-rafi-kusdiarto-265a092fa-xl18/"><i class="fa-brands fa-linkedin-in"></i></a>
        </div>
      </nav>
    </>
  )
}

export default nav