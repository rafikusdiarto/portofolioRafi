import React from 'react'
import './skills.css'
import ProgressBar from 'react-bootstrap/ProgressBar'

const Experience = () => {
  return (
    <>
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
    
    </>
  )
}

export default Experience