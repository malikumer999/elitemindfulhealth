import React from "react";


function Cardsnobtn(props) {
  return (
    <div className='col-md-3 pt-5 pb-5  '>
    <div class="card p-2 rounded-4 border-0 shadow" >
    <h5 class="card-title text-center fw-bold ">{props?.titlee || "Card Title Not Avaliable"} </h5>

        <img src={props?.imgSrc || "/Assets/images/default.jpg"} class="card-img-top " alt="..." />
        <div class="card-body">
            <h5 class="card-title text-center fw-bold ">{props?.title || "Card Title Not Avaliable"} </h5>
            <p class="card-text"> {props?.description || "Card Description Not Avalaible"}</p>
            <div className="mt-4 mb-2 text-center">
            </div>
        </div>
    </div>
</div>
  );
}



export default Cardsnobtn
