import React from 'react'
import Navbar from '../components/Navbar'
// import 'animate.css';
// import Footer from '../components/Footer'
import '../volunteer.css'
// import Aos from 'aos';
// import AOS from 'aos';
import 'aos/dist/aos.css';
import { TiUser } from 'react-icons/ti';
import { MdEmail } from 'react-icons/md';
import { CgPhone } from 'react-icons/cg';
import { MdMessage } from 'react-icons/md';
import Footer from '../components/Footer';

export default function Volunteer() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='mt-5 text-center'>
        <h2 className='volunteerheading' id='volunteerheading' data-aos="zoom-in" data-aos-duration="2000">Volunteer Coordination</h2>
      </div>
      {/* Volunteer Image card */}
      <div className="container d-flex justify-content-center" id='volunteercard1' >
        <div className="row g-0" style={{ width: "auto" }}>
          <div className="col-md-7">
            <img src="volunteer1.jpg" className="img-fluid rounded-start" data-aos="fade-right" alt="..." />
          </div>
          <div className="col-md-5 m-auto">
            <div className="card-body">
              {/* <h5 className="card-title mb-3 text-black"></h5> */}
              <p className="card-text" id='volunteerquote1' data-aos="fade-left" data-aos-duration="2000">"Volunteers are the backbone of any disaster response effort. They give selflessly of their time and energy to help those in need, and we are forever grateful for their service."
                <small className="text" id='quoteauthor1'> -Greg Abbott</small>
              </p>
            </div>
          </div>
        </div>
      </div>



      <div className="container d-flex justify-content-center ">
        <div className="row mt-5 ">
          <div className="col-md-6 text text-white lcol" data-aos="fade-right" data-aos-duration="2000">
            <div className="greeting" data-aos="zoom-out" data-aos-duration="2000"><h3>Welcome to <span className="txt" id='contactcard2'>Disaster Protection</span></h3></div>
            <h6 className="mt-2" id='contactcard3' data-aos="zoom-out" data-aos-duration="2000">let's raise hand together to make a better world...</h6>
            <div>
              <img className='center' src='volunteer2.jpg' id='volunteerimg2' data-aos="zoom-in" data-aos-duration="2000" alt='' />
            </div>
            <div className="footer">
              <div className="socials d-flex flex-row justify-content-between text-white">
                <div className="d-flex flex-row">
                  {/* <i className="fab fa-linkedin-in"></i><i className="fab fa-facebook-f"></i>
                  <i className="fab fa-twitter"></i> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 rcol" data-aos="fade-left" data-aos-duration="2000">
            <form className="sign-up">
              <h2 className="heading mb-4" data-aos="zoom-in" data-aos-duration="2000">Your Info</h2>
              <div className="form-group fone mt-2" data-aos="zoom-in" data-aos-duration="1000">
                <i className="fas fa-user"><TiUser /></i>
                <input type="name" className="form-control" placeholder="Name" />
              </div>
              <div className="form-group fone mt-2" data-aos="zoom-in" data-aos-duration="1000">
                <i className="fas fa-envelope"><MdEmail /></i>
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="form-group fone mt-2" data-aos="zoom-in" data-aos-duration="1000">
                <i className="fas fa-lock"><CgPhone /></i>
                <input type="text" className="form-control" placeholder="Contact No." />
                <div className="image"><i className="fas fa-eye"></i></div>
              </div>
              <div className="form-group fone mt-2" data-aos="zoom-in" data-aos-duration="1000">
                <i className="fas fa-lock"><MdMessage /></i>
                <textarea type="text" className="form-control" placeholder="Tell us something about your self..." />
                <div className="image"><i className="fas fa-eye"></i></div>
              </div>
              {/* <input type="checkbox" className="form-check-input ml-0" id="exampleCheck1" />
              <label className="form-check-label ml-3" for="exampleCheck1">I agree to Stoke <u>Terms</u> and <u>Privacy Policy</u></label> */}
            </form>

            <button type="button" className="btn btn-success mt-5" data-aos="zoom-in" data-aos-duration="1000" style={{ background: "orange" }}>Get satrted now</button>

          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
