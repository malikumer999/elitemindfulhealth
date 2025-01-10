import React from "react";


function Cards(props) {
  return (
    
    <div className='col-xl-3 col-md-6  mt-5 mb-5  '>
    <div class="card p-2 rounded-4 border-0" >
        <img src={props?.imgSrc || "/Assets/images/default.jpg"} class="card-img-top " alt="..." />
        <div class="card-body">
            <h5 class="card-title text-center fw-bold ">{props?.title || "Card Title Not Avaliable"} </h5>
            <p class="card-text text-center"> {props?.description || "Card Description Not Avalaible"}</p>
            <div className="mt-4 mb-2 text-center">
                <button className="btn btn-primary">Read More</button>
            </div>
        </div>
    </div>
</div>

  );
}

export default Cards;
