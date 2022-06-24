import React from 'react'
import './about.css'
import Axios  from 'axios'
import FileDownload from 'js-file-download'
import { render } from 'react-dom';
import ReactWhatsapp from 'react-whatsapp';


export const about = () => {
    <ReactWhatsapp number="+62878-0968-0106" message="Hello World!!!" />
    return (
    <>
      <div className="container">
        <div className="row">
          <div class="row d-flex justify-content-between my-5">
            <img src="../assets/img/me.jpg" class="image col-xl-5 d-flex justify-content-center roundedCircle" alt="" />
            <div class="col-6 mt-5">
              <h2 class="my-2">Hello I'm</h2>
              <h1><span>Muhammad Rafi Kusdiarto</span></h1>
              <h5 class="mt-2">Frontend Web Developer</h5>
              <div class="icon my-3">
                <a href="https://github.com/rafikusdiarto/rafiescobar" class="btn btn-social-icon btn-github">
                  <span class="fa fa-github"></span>
                </a>
                <a href="https://www.instagram.com/muhmmad.rafii/" class="btn btn-social-icon btn-instagram mx-4">
                  <span class="fa fa-instagram"></span>
                </a>
                <a href="https://www.linkedin.com/in/muhammad-rafi-kusdiarto-265a09218/" class="btn btn-social-icon btn-linkedin me-4">
                  <span class="fa fa-linkedin"></span>
                </a>
                <a href="// https://web.facebook.com/profile.php?id=100005698544779" class="btn btn-social-icon btn-facebook">
                  <span class="fa fa-facebook"></span>
                </a>
              </div>
              <div class="flex">
                <p>I am a frontend web developer with more than 2 months experience. I use Frontend libraries like ReactJS.</p>
                <div class="my-5">
                  <a href='https://api.whatsapp.com/send/?phone=6287809680106&text&app_absent=0' class="btn btn-success btn-lg me-3" download>Contact Me</a>
                  <a href='../public/assets/Muhammad Rafi Kusdiarto.pdf' class="btn btn-outline-success btn-lg" download>Download CV</a>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// https://github.com/rafikusdiarto/rafiescobar
// https://web.facebook.com/profile.php?id=100005698544779
// https://www.instagram.com/muhmmad.rafii/
// https://www.linkedin.com/in/muhammad-rafi-kusdiarto-265a09218/

export default about