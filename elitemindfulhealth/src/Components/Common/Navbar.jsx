import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="">
      <nav class="navbar navbar-expand-lg  ">
        <div class="container-fluid  ">
          <Link class="navbar-brand " to="/">
            <img width={250} src="./Assests/Images/image 4.png" alt="" />
          </Link>
          <button
            class="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse  justify-content-center"
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav ">
              <Link class="nav-link " aria-current="page" to="/">
                About Us
              </Link>
              <Link class="nav-link" to="/services">
                Services
              </Link>
              <Link class="nav-link" to="/specialization">
                Specialization
              </Link>
              <Link class="nav-link" to="/resources">
                Resources
              </Link>
              <Link class="nav-link" to="/contactus">
                Contact Us
              </Link>
            </div >

          </div>
          <div className="justify-content-end collapse navbar-collapse  " id="navbarNavAltMarkup">
          <button className="btn btn-primary d-flex ">Book a Sechedule</button></div>

        </div>
        
          
        
      </nav>
    </div>
  );
}

export default Navbar;
