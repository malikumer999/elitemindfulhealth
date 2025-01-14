import React from 'react'
import { Link } from 'react-router-dom'

function Blogcards(props) {
  return (
    <div>
      <div class="card mt-5 border-0  w-100" >
      <img src={props?.imgSrc || "/Assets/images/default.jpg"} class="card-img-top " alt="..." />
  <div class="card-body">
    <h5 class="card-title">{props?.title || "Card Title Not Avaliable"}</h5>
    <p class="card-text">{props?.description || "Card Description Not Avalaible"}</p>
    <Link href="/" class="btn btn-primary">Go somewhere</Link>
  </div>
</div>
    </div>
  )
}

export default Blogcards
