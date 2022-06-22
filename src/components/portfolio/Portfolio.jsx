import React from 'react'
import './portfolio.css'


const Portfolio = () => {
  return (
    <>
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
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
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
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
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
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>  
    </>
  )
}

export default Portfolio