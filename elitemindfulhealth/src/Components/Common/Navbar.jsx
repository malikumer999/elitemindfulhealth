import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
<div>
<nav class="navbar navbar-expand-lg  ">
  <div class="container-fluid mx-5 py-2 ">
  <Link class="navbar-brand" href="/">
            <img src="./Assests/Images/image 4.png" alt="" />
          </Link>    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-center " id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item ">
          <Link class="nav-link active text-info" aria-current="page"  to="/">About US</Link>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/services" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" href="/">Action</Link></li>
            <li><Link class="dropdown-item" href="/">Another action</Link></li>
            <li><Link class="dropdown-item" href="/">Something else here</Link></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/specialization" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Specializations
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" href="#">Action</Link></li>
            <li><Link class="dropdown-item" href="#">Another action</Link></li>
            <li><Link class="dropdown-item" href="#">Something else here</Link></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/resources" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Resources
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" href="#">Action</Link></li>
            <li><Link class="dropdown-item" href="#">Another action</Link></li>
            <li><Link class="dropdown-item" href="#">Something else here</Link></li>
          </ul>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contactus">Contact Us</Link>
        </li>
      </ul>

    </div>
    <button className='btn btn-primary'>Book a Consultation</button>

  </div>
</nav>
</div>
  )
}

export default Navbar
