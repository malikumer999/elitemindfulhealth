import React from "react";

function Contactbody() {
  return (
    <div>
      <div className="row mx-5">
        <div className="col-md-6">
          <div className="bg-colorhead1 shadow rounded-5 py-5">
            <div className="row mx-5">
              <div className="col-md-6">
                {" "}
                <label htmlFor="" className="mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control mt-2 mb-3 p-2 rounded-3"
                  name=""
                  id=""
                  placeholder="Name"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="" className="mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control mt-2 mb-3 p-2 rounded-3"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="row mx-5 py-5">
              <div className="col-md-6">
                {" "}
                <label htmlFor="" className="mb-1">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control mt-2 mb-3 p-2 rounded-3"
                  name=""
                  id=""
                  placeholder="Phone Number"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="" className="mb-1">
                  Preferred Contact Method
                </label>
                <input
                  type="number"
                  className="form-control mt-2 mb-3 p-2 rounded-3"
                  placeholder="Select contact method"
                />
              </div>
              <div className="col-md-12 py-5">
                <label htmlFor="">Message for Inquiry Details</label>
                <textarea name="" className="form-control w-100 rounded-2 pb-5 mt-2 " id=""></textarea>
              </div>
              <div class=" border-0 bg-colorhead1">
    <input class="form-check-input mt-1 " type="radio" value="" aria-label="Radio button for following text input"/>
    <label htmlFor="" className="ms-2"> I agree to the privacy policy</label>
  </div>

  <div>
    <button className="btn btn-primary w-100 mt-5">
        Submit
    </button>
  </div>
            </div>
          </div>
          <div className="bg-colorhead1 shadow rounded-5 py-2 mt-5 mb-5">
<div className="mx-5">
<h2 >Prefer to Speak with <br />Us</h2>
  <p>Give us a Call</p>
  <button className="btn btn-primary"><img src="./Assests/Images/Vector.png" alt="" /> Call Now</button>
</div>
          </div>
        </div>
        <div className="col-md-6 ">
          <h1>Contact Information</h1>
          <div className="row mt-3">
            <div className="col-md-3">
              <p className="fw-bold">Email Address:</p>
            </div>
            <div className="col-md-9">  info@elitemindfulhealth.net</div>
            <div className="col-md-3">
              <p className="fw-bold">Phone Number:</p>
            </div>
            <div className="col-md-9">(561) 801-6920</div>
            <div className="col-md-3">
              <p className="fw-bold">Physical Address:</p>
            </div>
            <div className="col-md-9">11327 Okeechobee   Blvd, Royal Palm Beach, FL 33411.</div>
            <div className="col-md-3">
              <p className="fw-bold">Business Hours:</p>
            </div>
            <div className="col-md-9">Monday – Friday: 8 AM – 6 PM</div>
          </div>

          <img src="./Assests/Images/m.png" className="w-100 mt-5" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Contactbody;
