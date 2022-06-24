import React from 'react'
import './contact.css'

export const contact = () => {
  return (
    <>
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
    </>
  )
}
export default contact