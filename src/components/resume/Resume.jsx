import React from 'react'
import './resume.css'

const Resume = () => {
  return (
    <>
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
    </>
  )
}

export default Resume