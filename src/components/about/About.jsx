import React from 'react'
import './about.css'
import ProgressBar from 'react-bootstrap/ProgressBar'


export const about = () => {
    return (
    <>
    {/* about */}
      <div class="container">
        <div class="row">
          <div class="row d-flex justify-content-between my-5">
            <img src="../assets/img/me.jpg" class="image col-xl-5 d-flex justify-content-center roundedCircle" alt="" />
            <div class="col-6 mt-5">
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
    {/* skills */}
      <section id="skills" class="skills my-5">
        <div class="container">
          <div class="section-title">
            <h2>Skills</h2>
            <p>I have more than 1 Month of experience as a Frontend Web Developer. I have also used various latest technologies such as ReactJS and NextJS.</p>
          </div>
          <div class="row skills-content">
            <div class="col-lg-6">
              <span>HTML/CSS</span>
              <p>90%</p>
              <ProgressBar animated now={90} />
              <span>Javascript</span>
              <p>70%</p>
              <ProgressBar animated now={70} />
            </div>
            <div class="col-lg-6">
              <span>PHP</span>
              <p>80%</p>
              <ProgressBar animated now={80} />
              <span>Photoshop</span>
              <p>50%</p>
              <ProgressBar animated now={50} />
            </div>
          </div>
        </div>
      </section>
    {/* resume */}
      <section id="resume" class="resume section-bg">
      <div class="container">

          <div class="section-title">
          <h2>Resume</h2>
          <h2>Summary & Experience</h2>
          </div>

          <div class="row">
          <div class="col-lg-6">

              <h3 class="resume-title">Education</h3>
              <div class="resume-item">
              <h4>SMPN 1 Sidoarjo</h4>
              <h5>2014 - 2017</h5>
              <p><em>Sidoarjo, East Java</em></p>
              </div>
              <div class="resume-item">
              <h4>SMAN 1 Krian</h4>
              <h5>2017 - 2020</h5>
              <p><em>Sidoarjo, East Java</em></p>
              </div>
              <div class="resume-item">
              <h4>Informatika - Universitas Negeri Jember</h4>
              <h5>2020 - Present</h5>
              <p><em>Jember, East Java</em></p>
              </div>
          </div>
          <div class="col-lg-6">
              <h3 class="resume-title">Contribute On</h3>
              <div class="resume-item">
              <h4>HMIF UNEJ - Divisi Penelitian dan Pengembangan</h4>
              <h5>2021 - Present</h5>
              <p><em>Jember, East Java </em></p>
              <p>
              <ul>
                  <li>Conduct research and development of Student Resources in the academic field that are Innovative and Reasoning.</li>
                  <li>Analyze organizational problems and evaluate the work program of the Informatics Student Association (HMIF)</li>
              </ul>
              </p>
              </div>
          </div>
          </div>

      </div>
      </section>
    {/* portfolio */}
      <section id="portfolio" class="portfolio section-bg my-5">
        <div class="container">
          <div class="section-title">
            <h2>Project</h2>
            <p>i tried to make some projects obtained from college learning and the association's work program, and some of them at below</p>
          </div>

          <div class="row">
            <div class="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter=".filter-web">Web</li>
              </ul>
            </div>
          </div>

          <div class="row portfolio-container my-5">

            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
              <div class="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-2.png" class="img-fluid" alt=""/>
                <div class="portfolio-info">
                  <h4>Web 1</h4>
                  <p>Web</p>
                </div>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-2.png" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 1"></a>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
              <div class="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-1.png" class="img-fluid" alt=""/>
                <div class="portfolio-info">
                  <h4>Web 2</h4>
                  <p>Web</p>
                </div>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-1.png" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"></a>
                </div>
              </div>
            </div>
            
            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
              <div class="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-3.png" class="img-fluid" alt=""/>
                <div class="portfolio-info">
                  <h4>Web 3</h4>
                  <p>Web</p>
                </div>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-3.png" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
    {/* contact */}
      <section id="contact" class="contact">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="row">
                  <h2>Contact</h2>
                  <div class="col-6">
                    <div class="info">
                      <div class="d-flex align-items-center">
                        <i class="bi bi-geo-alt"></i>
                        <p>Sidoarjo<br/>East Java, 61265</p>
                      </div>

                      <div class="d-flex align-items-center mt-4">
                        <i class="bi bi-envelope"></i>
                        <p>rafikusdiarto1707@gmail.com</p>
                      </div>

                      <div class="d-flex align-items-center mt-4">
                        <i class="bi bi-phone"></i>
                        <p>0878-0968-0106</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                      <div class="form-group">
                        <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required/>
                      </div>
                      <div class="form-group mt-3">
                        <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required/>
                      </div>
                      <div class="form-group mt-3">
                        <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                      </div>
                      <div class="my-3">
                        <div class="loading">Loading</div>
                        <div class="error-message"></div>
                        <div class="sent-message">Your message has been sent. Thank you!</div>
                      </div>
                      <div class="text-center"><button type="submit">Send Message</button></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    {/* footer */}
      <footer id="footer">
        <div class="container">
          <div class="copyright">
            &copy; Copyright <strong><span>rafikusdiarto</span></strong>. All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  )
}

// https://github.com/rafikusdiarto/rafiescobar
// https://web.facebook.com/profile.php?id=100005698544779
// https://www.instagram.com/muhmmad.rafii/
// https://www.linkedin.com/in/muhammad-rafi-kusdiarto-265a09218/

export default about