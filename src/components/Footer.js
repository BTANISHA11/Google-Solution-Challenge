import React from 'react'
import '../footer.css'
import { RiCopyrightFill } from 'react-icons/ri';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';


function Footer() {
  return (
    <div>
      <div className="">
        <div className="card" id='footercard'>
          <div className="row mb-4 w-auto">
            <div className="col-md-4 col-sm-4 col-xs-4">
              <div className="footer-text pull-left">
                <div className="d-flex">
                  <h1 className="font-weight-bold mr-2 px-3 " style={{ color: "white", backgroundColor: "orange" }}> Disaster </h1>
                  <h1 style={{ color: " orange" }}>Protection</h1>
                </div>
                {/* <p className="card-text">Better to be prepared and not need it, than to need it and not be prepared.</p> */}
                <div className="social mt-2 mb-3"> <i className="fa fa-facebook-official fa-lg"><BsFacebook /></i> <i className="fa fa-instagram fa-lg"><BsInstagram /></i> <i className="fa fa-twitter fa-lg"><BsTwitter /></i> <i className="fa fa-linkedin-square fa-lg"><BsLinkedin /></i> <i className="fa fa-facebook"></i> </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-2"></div>
            <div className="col-md-2 col-sm-2 col-xs-2">
              <h5 className="heading">Services</h5>
              <ul>
                <li id='footer-link'>Virtual Training</li>
                <li id='footer-link'>Emergency</li>
                <li id='footer-link'>Resources</li>
                <li id='footer-link'>Help</li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-2">
              <h5 className="heading">Services</h5>
              <ul>
                <li id='footer-link'>About Us</li>
                <li id='footer-link'>Team</li>
                <li id='footer-link'>Contact Us</li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-2">
              <h5 className="heading">Support Us</h5>
              <ul>
                <li id='footer-link'>Donate</li>
                <li id='footer-link'>Gift A Tree</li>
                <li id='footer-link'>Cloud</li>

              </ul>
            </div>

          </div>
          <div className="divider mb-4"> </div>
          <div className="row w-auto" style={{ fontSize: "10px" }}>
            <div className="col-md-6 col-sm-6 col-xs-6">
              <div className="pull-left copy">
                <p><i className="fa fa-copyright"><RiCopyrightFill />2020</i></p>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-6">
              <div className="pull-right mr-4 d-flex policy">
                <div>Terms of Use</div>
                <div>Privacy Policy</div>
                <div>Cookie Policy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
