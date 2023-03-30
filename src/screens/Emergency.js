
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../emergency.css';



const Emergency = () => {
  return (
    <div>

      <div>
        <Navbar />
      </div>


      <div className="bg-light">
        <div className="container" >
          <div className="row justify justify-content-center" id='emergencyform'>
            <div className="col-11 col-md-8 col-lg-6 col-xl-5" >
              <form className="" >
                <div className="card bg-dark">
                  <div className="row mt-0 w-auto" >
                    <div className="col-md-12" >
                      <h4 className="">Emergency</h4>
                      <p>Share your details with us. We will reach you.</p>
                    </div>
                  </div>
                  <div className="form-group row mb-3 w-auto">
                    <div className="col-md-12 mb-0" >
                      <p className="mb-1">Name</p> <input id="e-mail" type="text" placeholder="Enter your name" name="name" className="form-control input-box rm-border" />
                    </div>
                  </div>
                  <div className="form-group row mb-3 w-auto">
                    <div className="col-md-12 mb-0" >
                      <p className="mb-1">Phone</p> <input id="e-mail" type="text" placeholder="Enter your phone number" name="text" className="form-control input-box rm-border" />
                    </div>
                  </div>
                  <div className="form-group row mb-3 w-auto">
                    <div className="col-md-12 mb-0" >
                      <p className="mb-1">Email</p> <input id="e-mail" type="text" placeholder="Enter your email" name="email" className="form-control input-box rm-border" />
                    </div>
                  </div>
                  <div className="form-group row mb-3 w-auto">
                    <div className="col-md-12 mb-0" >
                      <p className="mb-1">Address</p> <input id="e-mail" type="text" placeholder="Enter your address" name="text" className="form-control input-box rm-border" />
                    </div>
                  </div>
                  <div className="form-group row w-auto">
                    <div className="col-md-12 mb-2" id='emergencyform'>
                      <p className="mb-1">Message</p> <textarea id="message" type="text" placeholder="Enter your message" name="message" className="form-control input-box rm-border"></textarea>
                    </div>
                  </div>
                  <div className="form-group row justify-content-center mb-0 w-auto">
                    <div className="col-md-12 px-3"> <input type="submit" value="Submit" className="btn btn-block btn-purple rm-border" /> </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Emergency
