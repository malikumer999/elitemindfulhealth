import React from 'react'
import Slider from '../Common/Slider'

function Patienttest() {
  return (
    <div className='mt-5'>
      <div className='row mx-5 py-5'>
        <div className='col-md-4'>
        <button className='btn  btn-colorpink  rounded-5'>Patient Testimonials</button>

        <h1 className='mt-5'>What our <br /><b className='text-primary'>patient says</b></h1>

        </div>
        <div className='col-md-8'>
<Slider/>
        </div>
      </div>
    </div>
  )
}

export default Patienttest
