import React from 'react'
import '../contact.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import 'aos/dist/aos.css';
import { MdLocationOn } from 'react-icons/md';
import { MdPhone } from 'react-icons/md';
import { MdMail } from 'react-icons/md';

// import { Footer } from 'react-bootstrap'

function Contact() {
    return (
        <div>
            <div>
                <Navbar />
            </div>




            <div className="wrapper">
                {/* <img src='' alt=''/> */}
                <div className="overlay">
                    <div className="row d-flex w-100 justify-content-center align-items-center">
                        <div className="col-md-9">
                            <div className="contact-us text-center">
                                <h3 data-aos="fade-right" data-aos-duration="2000">Get In Touch</h3>
                                <p className="mb-5" data-aos="fade-left" data-aos-duration="2000">with us regarding any issue or doubt or information... </p>
                                <div className="row w-auto">
                                    <div className="col-md-6">
                                        <div className="mt-5 text-center px-3" >
                                            <div className="d-flex flex-row align-items-center"data-aos="zoom-in" data-aos-duration="2000">
                                                <a href='https://goo.gl/maps/Jy8HUNVuhmY5MSnN7' className="icons text-black"><i className="fa fa-map-marker"><MdLocationOn /></i></a>
                                                <div className="address text-start" id='contact'> <span>Address</span>
                                                    <p>ADGITM</p>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mt-3"data-aos="zoom-in" data-aos-duration="2000">
                                                <a href="tel: 9599791185" className="icons text-black"><i className="fa fa-phone"><MdPhone /></i></a>
                                                <div className="address text-start"> <span>Phone</span>
                                                    <p>501 205 2929</p>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mt-3"data-aos="zoom-in" data-aos-duration="2000">
                                                <a href='mailto:namanb454@gmail.com' className="icons text-black"><i className="fa fa-envelope-o"></i><MdMail /></a>
                                                <div className="address text-start"> <span>E-mail</span>
                                                    <p>namanb454@gmail.com</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 ">
                                        <div className="text-center" data-aos="zoom-out" data-aos-duration="2000">
                                            <div className="forms p-5 py-5 bg-white">
                                                <h5 data-aos="zoom-out" data-aos-duration="2000">Send Message</h5>
                                                <div className="mt-4 inputs" data-aos="zoom-in" data-aos-duration="2000"> 
                                                <input type="text" className="form-control" placeholder="Name" />
                                                    <input type="text" className="form-control" placeholder="Email" />
                                                    <input type="text" className="form-control" placeholder="Phone No." />
                                                    <textarea className="form-control" placeholder="Type your message"></textarea>
                                                </div>
                                                <div className="button mt-4 text-left"> <button className="btn btn-dark" id='sendButton' data-aos="zoom-in" data-aos-duration="2000">Send</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Contact
