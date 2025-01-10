import React from 'react'

function Footer() {
  return (
    <div>
      <div className='row mx-3 py-5'>
        <div className='col-md-3'>
<img src="./Assests/Images/image 4.png" alt="" className='w-100'/>
<p>Email Address: info@elitemindfulhealth.net</p>
<p>Phone Number:  (561) 801-6920</p>
<p>Physical Address:  11327 Okeechobee   Blvd,<br /> Royal Palm Beach, FL 33411</p>

        </div>
        <div className='col-md-2'>
<h4>Quick Links</h4>
<p>Home</p>
<p>About Us</p>
<p>Services</p>
<p>Specializations</p>
<p>Resources</p>
<p>Contact US</p>
        </div>
        <div className='col-md-2'>
<h4>Legal</h4>
<p>Privacy Policy</p>
<p>Terms of Services</p>
        </div>
        <div className='col-md-2'>
<h4>Company</h4>
<p>Careers</p>
<p>Patient Portal</p>
        </div>
        <div className='col-md-3 '>
<h3 className='text-primary'>Subscribe to Our Newsletter</h3>
<div class="input-group mb-3 mt-4">
  <input type="text" class="form-control" placeholder="@example.com" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <span class="input-group-text " id="basic-addon2">Submit</span>
</div>
        </div>
      </div>
      <div className='bg-primary'>
<p className='text-white text-center pt-3 pb-3 endline'>Copyright@2024   Elite Mindful Health   All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
