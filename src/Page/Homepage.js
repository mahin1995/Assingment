import React from 'react'
import { Client } from '../component/Client'
import Footer from '../component/Footer'
import { Service } from '../component/Service'
import { Title } from '../component/Title'

export const Homepage = () => {
  return (
    <div style={{backgroundColor:'#F2F2F2'}}>
          <Title/>
          <Service/>
<Client/>
{/* <Footer/> */}


      </div>
  )
}
