import { Slider } from '@mui/material'
import React from 'react'
import { Client } from '../component/Client'
import Footer from '../component/Footer'
import { Service } from '../component/Service'
import SlideItem from '../component/SlideItem'
import { Title } from '../component/Title'
import SimpleSlider from '../component/UserSlider'

export const Homepage = () => {
  return (
    <div style={{backgroundColor:'#F2F2F2'}}>
          <Title/>
          <Service/>
<Client/>
<SimpleSlider />
<Footer/>


      </div>
  )
}
