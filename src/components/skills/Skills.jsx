import React from 'react'
import './skills.css'
import ProgressBar from 'react-bootstrap/ProgressBar'

const Experience = () => {
  return (
    <>
      <section id="skills" class="skills section-bg">
      <div class="container">

        <div class="section-title">
          <h2>Skills</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
        <div class="row skills-content">
          <div class="col-lg-6">
            <span>HTML/CSS</span>
            <ProgressBar animated now={90} label={`${90}%`}/>
            <span>Javascript</span>
            <ProgressBar animated now={70} label={`${70}%`}/>
          </div>
          <div class="col-lg-6">
            <span>PHP</span>
            <ProgressBar animated now={80} label={`${80}%`}/>
            <span>Photoshop</span>
            <ProgressBar animated now={50} label={`${50}%`}/>
          </div>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default Experience