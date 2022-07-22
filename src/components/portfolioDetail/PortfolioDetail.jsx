import React from 'react'
import './portfolioDetail.css'


const PortfolioDetail = () => {
  return (
    <>
      <section id="portfolio" class="portfolio section-bg my-5">
        <div class="row row-cols-1 row-cols-md-3 g-4 flex">
          <div class="col">
            <div class="card h-100">
              <img src="..." class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="..." class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a short card.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="..." class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="..." class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PortfolioDetail