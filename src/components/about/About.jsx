import React from 'react'
import './about.css'
import { saveAs } from "file-saver";
import { Link } from 'react-router-dom';

export const about = () => {
    return (
    <>
    {/* about */}
    <section id="about">
      <div class="hero">
        <div class="container fluid">
          <div class="row justify-content-center">
            <div class="row d-flex my-5">
              <img src="../assets/img/me.jpg" class="image col-xl-5 d-flex " alt="" />
              <div class="col-6 mt-5">
                <div class="mask-custom shadow-lg mt-4">
                  <div class="card-body p5 ">
                    <h2 class="my-2">Hello I'm</h2>
                    <h1><span>Muhammad Rafi Kusdiarto</span></h1>
                    <h5 class="mt-2">Frontend Web Developer</h5>
                    <div class="icon my-3">
                      <a href="https://github.com/rafikusdiarto?tab=repositories" class="btn btn-social-icon btn-github">
                        <span class="fa fa-github"></span>
                      </a>
                      <a href="https://www.instagram.com/muhmmad.rafii/" class="btn btn-social-icon btn-instagram mx-4">
                        <span class="fa fa-instagram"></span>
                      </a>
                      <a href="https://www.linkedin.com/in/muhammad-rafi-kusdiarto-265a09218/" class="btn btn-social-icon btn-linkedin me-4">
                        <span class="fa fa-linkedin"></span>
                      </a>
                      <a href="https://www.facebook.com/profile.php?id=100005698544779" class="btn btn-social-icon btn-facebook">
                        <span class="fa fa-facebook"></span>
                      </a>
                      <p>I am a frontend web developer with more than 2 months experience. I use Frontend libraries like ReactJS.</p>
                      <div class="flex">
                        <div class="">
                          <a href='https://api.whatsapp.com/send/?phone=6287809680106&text&app_absent=0' class="btn btn-success btn-lg me-3 shadow-lg">Contact Me</a>
                          <a href='./CV Muhammad Rafi Kusdiarto.pdf' class="btn btn-outline-success btn-lg shadow-lg" download>Download CV</a>
                        </div>
                      </div>  
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    </>
  )
}

// https://github.com/rafikusdiarto/rafiescobar
// https://web.facebook.com/profile.php?id=100005698544779
// https://www.instagram.com/muhmmad.rafii/
// https://www.linkedin.com/in/muhammad-rafi-kusdiarto-265a09218/

export default about