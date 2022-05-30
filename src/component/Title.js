import React from 'react'
import { Card } from 'react-bootstrap';
export const Title = () => {
  return (
    <div  className=' row container'  style={{marginTop:'30px'}}>

          
<div className='container' style={{display:'flex',marginTop:'10px',height:'300px'}}>
      <div className='col-md-6' style={{paddingTop:'30px',marginRight:'10px'}}>
            <h4 style={{color:'#644F9C'}}>THIS IS A HEADER</h4>
         < p >
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
         </p> 
         
      </div>

      <div className='col-md-6' style={{paddingTop:'30px',marginLeft:'100px',background:'white'}}>
            
      
      < p >Motorcycle Transmissions Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when</p> 
      </div>

   </div>

   

    </div>
  )
}

