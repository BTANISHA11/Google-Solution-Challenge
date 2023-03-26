import React from 'react'

export default function Navbar() {
//     var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbarStart").style.top = "0";
//   } else {
//     document.getElementById("navbarStart").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }

    return (
        <div>
            <nav className="navbar navbar-expand-lg m-0 p-0" id='navbarStart'>

                <div style={{ height: "10vh", backgroundColor: "green-600", }} className="container-fluid" id='containerFluid'>
                    <a className="navbar-brand mx-2 " id='navbarHeading' href="/">Disaster Protection</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto m-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2" >
                                <a className="nav-link active" id='nav-link' aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link active" id='nav-link' aria-current="page" href="/emergency">Emergency</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link active" id='nav-link' aria-current="page" href="/">Resources</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link active" id='nav-link' aria-current="page" href="/volunteer">Volunteer Coordination</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link active" id='nav-link' aria-current="page" href="/training">Virtual Training</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link active" id='nav-link' aria-current="page" href="/contact">Contact Us</a>
                            </li>
                        </ul>



                    </div>


                <form className="d-flex col-xl- m-auto" role="search">

                    <button className="btn btn-outline-danger mx-2" type="submit">Donate</button>
                </form>
                </div>
            </nav>
        </div>
    )
}
