import React from 'react'
import './about.css'
import Button from 'react-bootstrap/Button';


export const about = () => {
  return (
    <>
      <section class="headerArea">
        <div id="home" class="headerHero">
          <div class="container my-5">
            <div class="row">
              <div class="col-lg d-flex">
                <div class="row d-flex justify-content-between">
                  <img src="../assets/img/me.jpg" class="image col-xl-5 d-flex justify-content-center roundedCircle" alt="" />
                  <div class="col-6 mt-5">
                    <h2 class="my-2">Hello I'm</h2>
                    <h1><span>Muhammad Rafi Kusdiarto</span></h1>
                    <h5 class="my-4">Frontend Web Developer</h5>
                    <div class="flex">
                      <p>I am a frontend web developer with more than 2 months experience. I use Frontend libraries like ReactJS.</p>
                      <div className="my-5">
                        <Button variant="success" size="lg">
                          Contact Now
                        </Button>{' '}
                        <Button variant="outline-success" size="lg">
                          Download CV
                        </Button>
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

export default about