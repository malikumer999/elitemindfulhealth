import React from 'react'

function Servicescard(props) {
  return (
    <div >
      <div class="card1  mt-5" >
      <img src={props?.imgSrc || "/Assets/images/default.jpg"} class="serviceimg w-100" alt="..." />
      <div class="card-body1 mx-2 pb-4 pt-4 text-center bg-colorhead1">
      <h5 class="card-title text-center fw-bold ">{props?.title || "Card Title Not Avaliable"} </h5>
      <p class="card-text text-center"> {props?.description || "Card Description Not Avalaible"}</p>
  </div>
</div>
    </div>
  )
}

export default Servicescard
