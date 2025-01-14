import React from "react";
import Cardsnobtn from "../Common/Cardsnobtn";
import Servicescard from "../Common/Servicescard";

function Servicemain() {
  return (
    <div>
      <img src="./Assests/Images/2.png" className="w-100" alt="" />

      <div className="row mx-5 py-5">
        <div className="col-md-6">
          <img src="./Assests/Images/1.png" className='w-100' alt="" />
        </div>
        <div className="col-md-6">
          <button className="btn  btn-colorpink  rounded-5 mt-3 mb-3">
            Overview
          </button>
          <h1>
            <b className="text-primary">Overcoming</b> Anxity
          </h1>
          <p>
            Anxiety can impact every facet of life. At Elite Mindful Health, we
            recognize the intricate dance between the mind and body in the realm
            of anxiety. Our comprehensive anxiety treatment program is designed
            to guide you towards inner calm, resilience, and empowerment.
          </p>
        </div>
      </div>
      <div className="text-center">
        <div className="text-center">
          <button className="btn  btn-colorpink  rounded-5 mt-3 mb-3">
            Overview
          </button>

          <h1>
            <b>Our approach goes beyond surface level relief;</b> <br />
            <b className="text-primary">
              It addresses root causes and nurtures holistic well being.
            </b>
          </h1>
        </div>

        <div className="row mx-5  ">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <Servicescard
              title="Evidence-Based Therapies:"
              description="Cognitive-Behavioral Therapy (CBT)  Identifying thought patterns contributing to anxiety and equipping you with strategies to manage and reframe those thoughts. "
              imgSrc="./Assests/Images/3.png"
            />
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <Servicescard
              title="Evidence-Based Therapies:"
              description="Cognitive-Behavioral Therapy (CBT)  Identifying thought patterns contributing to anxiety and equipping you with strategies to manage and reframe those thoughts."
              imgSrc="./Assests/Images/3.png"
            />
          </div>
        </div>
      </div>

      <div className="row mx-5 py-5 ">
        <div className="col-md-6">
          <img src="./Assests/Images/image (5).png" className='w-100' alt="" />
        </div>
        <div className="col-md-6 py-5 ">
          <h1 className="mb-4">Holistic Strategies</h1>
          <h5>
            <li>Mindfulness and Meditation</li>
          </h5>
          <p>Cultivating present-moment awareness and relaxation.</p>

          <h5>
            <li className="mt-4">Yoga Techniques</li>
          </h5>
          <p>Integrating movement and breath to reduce physical tension.</p>
        </div>
      </div>

      <div className="row mx-5 ">
        <div className="col-md-6 py-5">
          <button className="btn  btn-colorpink  rounded-5">
            Our Services
          </button>
          <h1>
            <b className="text-primary">Empowerment</b> and Resilience
          </h1>
          <p>
            We aim to empower you to reclaim your resilience, developing coping
            skills to face challenges with calm and clarity.
          </p>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-xl-6">
              <Cardsnobtn
              titlee="Holistic Self-Care" 
              title="Nutritional Counseling"
              description="Understanding the connection between nutrition and anxiety, and creating a personalized plan to support emotional well-being."
              imgSrc="./Assests/Images/image (6).png"/>
            </div>
            <div className="col-xl-6">
              <Cardsnobtn 
              titlee="In-Network Providers"
               title="Insurance Logos"
               description="Aetna, AvMed, Evernorth, Cigna, Optum, Oxford, United Healthcare (UHC and UBH)"
               imgSrc="./Assests/Images/image (7).png"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicemain;
