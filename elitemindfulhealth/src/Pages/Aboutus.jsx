import React from 'react'
import Navbar from '../Components/Common/Navbar'
import Heroimghead from '../Components/Aboutus/Heroimghead'
import Heromain from '../Components/Aboutus/Heromain'
import Maincards from '../Components/Aboutus/Maincards'
import Patienttest from '../Components/Aboutus/Patienttest'
import Inspirations from '../Components/Aboutus/Inspirations'
import Networks from '../Components/Aboutus/Networks'
import Heroend from '../Components/Aboutus/Heroend'
import Footer from '../Components/Common/Footer'

function Aboutus() {
  return (
    <div>
      <Navbar/>

     <Heroimghead/>

     <Heromain/>

     <Maincards/>

     <Patienttest/>

     <Inspirations/>

     <Networks/>

     <Heroend/>

     <Footer/>
    </div>
  )
}

export default Aboutus
