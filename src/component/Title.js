import React from 'react'
import { Card } from 'react-bootstrap';
import './footer.css'
export const Title = () => {
  return (
    <div  className='  row container'  >

          
<div className=' container col-12 ' style={{display:'flex',marginTop:'10px',height:'300px'}}>
      <div className='col-md-6' style={{paddingTop:'30px',marginRight:'10px'}} id='title'>
            <h4 style={{color:'#644F9C'}}>THIS IS A HEADER</h4>
         < p >
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
         </p> 
         
      </div>

      <div className='col-md-6 col-sm-12 ' id='fullscreen' style={{paddingTop:'10px',marginLeft:'100px',background:'white'}}>
            
      <h2 style={{color:'#644F9C'}}>THIS IS HEADER 2</h2>
      < p >Motorcycle Transmissions Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p> 
      </div>

   </div>

   

    </div>
  )
}

