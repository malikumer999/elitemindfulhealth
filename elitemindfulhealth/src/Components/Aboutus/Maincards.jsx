import React from "react";
import Cards from "../Common/Cards";

function Maincards() {
  return (
    <div className="background-colormaincard ">
      <div className="mx-5 py-5">
        <div className="text-center">
          <button className="btn  btn-colorpink  rounded-5 mb-2">
            Our services
          </button>
          <h1>
            Comprehensive <b className="text-primary">Mental Health Services</b>
          </h1>
        </div>
        <div className="row ">
            <Cards

              title="Anxity Treatment"
              description="Unravel the knots of anxiety and embrace tranquility"
              imgSrc="./Assests/Images/image.png"
            />
          
            <Cards
            
              title="Depression Treatment"
              description="Illuminate the path to recovery and rediscovery."
              imgSrc="./Assests/Images/imagen.png"
            />
        
            <Cards
            
              title="ADHD Treatment"
              description="Embark on a transformative journey towards managing."
              imgSrc="./Assests/Images/image (1)q.png"
            />
          
            <Cards
            
              title="Bipolar Disorder"
              description="Lorem ipsum ekds  ala skoter ndertues la sifer."
              imgSrc="./Assests/Images/image (2).png" 
            />
         </div>
      </div>
    </div>
  );
}

export default Maincards;
