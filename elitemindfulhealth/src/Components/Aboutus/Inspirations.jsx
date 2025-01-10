import React from 'react'
import Blogcards from '../Common/Blogcards'

function Inspirations() {
  return (
    <div className='mx-5 py-5'>
      <div className='text-center'>
      <button className='btn  btn-colorpink  rounded-5 mb-3'>Our Blog</button>
<h1 >Insights and <b className='text-primary'>Inspiration</b></h1>

      </div>
      <div className='row'>
        <div className='col-md-6 fs-5'>
<Blogcards title="Navigating ADHD: A Holistic Approach to Managing Symptoms" description="Attention Deficit Hyperactivity Disorder (ADHD) is a neuro- developmental condition that affects individuals of all ages..." imgSrc="./Assests/Images/imagel.png"/>
        </div>
        <div className='col-md-6 fs-5'>
<Blogcards title="Navigating ADHD: A Holistic Approach to Managing Symptoms" description="Attention Deficit Hyperactivity Disorder (ADHD) is a neuro- developmental condition that affects individuals of all ages..." imgSrc="./Assests/Images/img2.png"/>
        </div>
      </div>
    </div>
  )
}

export default Inspirations
