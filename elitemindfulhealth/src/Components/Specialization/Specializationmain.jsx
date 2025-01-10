import React from "react";

function Specializationmain() {
  return (
    <div>
      <div className="row mx-5 py-5">
        <div className="col-md-6">
          <img src="./Assests/Images/q.png" alt="" />
        </div>
        <div className="col-md-6 py-5">
          <button className="btn  btn-colorpink mb-3 rounded-5">
            Overview
          </button>

          <h1>
            <b className="text-primary">Understanding</b> Depression{" "}
          </h1>
          <p>
            Depression can cast a shadow on every aspect of life. Our
            comprehensive depression treatment program is designed to guide you
            towards healing, empowerment, and rediscovery.
          </p>
        </div>
      </div>

      <div>
        <div className="text-center">
          <button className="btn  btn-colorpink mb-3 rounded-5">
            Overview
          </button>
          <h1 className="py-3">
            <span className="text-primary">Our approach</span> goes beyond
            surface level <span className="text-primary"> relief;</span> <br />
            it addresses root causes and{" "}
            <span className="text-primary"> nurtures holistic </span> well
            being.
          </h1>
        </div>
        <div className="row mx-5">
          <div className="col-md-6 mt-5 ">
            <h3>Evidence-Based Therapies</h3>
            <h5><li>Cognitive-Behavioral Therapy(CBT)</li></h5>
            <p>Identifying thought patterns contributing to anxiety and equipping you with strategies to manage and reframe those thoughts.</p>
          </div>
          <div className="col-md-6">
            <img src="./Assests/Images/w.png" alt="" />
          </div>
        </div>
        <div className="row mx-5 pb-5">
          <div className="col-md-6"><img src="./Assests/Images/e.png" alt="" /></div>
          <div className="col-md-6 mt-5">
            <h3>Holistic Strategies</h3>
            <h5><li>Mindfulness and Meditation</li></h5>
            <p>Cultivating present-moment awareness and relaxation.</p>
            <h5><li>Yoga Techniques</li></h5>
            <p>Integrating movement and breath to reduce physical tension.</p>


          </div>
        </div>
      </div>

      <div className="row mx-5 py-5">
      <div className="col-md-6 py-5">
          <button className="btn  btn-colorpink mb-3 rounded-5">
            What we do
          </button>

          <h1>
            <b className="text-primary">Rediscovering</b> Joy{" "}
          </h1>
          <p>
          We help you identify activities and interests that bring happiness and a sense of accomplishment, restoring vitality and fulfillment.
          </p>
        </div>
        <div className="col-md-6">
          <img src="./Assests/Images/r.png" alt="" />
        </div>
       
      </div>
    </div>
  );
}

export default Specializationmain;
