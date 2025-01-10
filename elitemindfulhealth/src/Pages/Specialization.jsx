import React from 'react'
import Navbar from '../Components/Common/Navbar'
import Footer from '../Components/Common/Footer'
import Specializationhead from '../Components/Specialization/Specializationhead'
import Servicesbottom from '../Components/Common/Servicesbottom'
import Specializationmain from '../Components/Specialization/Specializationmain'
import Networks from '../Components/Aboutus/Networks'

function Specialization() {
  return (
    <div>
      <Navbar/>
<Specializationhead/>

<Specializationmain/>

<Networks/>
<Servicesbottom/>

      <Footer/>
    </div>
  )
}

export default Specialization
