import React from 'react'
import { Button, Form, FormControl, Navbar, Container, Nav ,Card} from 'react-bootstrap';
import Chip from '@mui/material/Chip';
export const Service = () => {
  return (
    <div style={{marginTop:'50px'}}>


          <div className='col-md-12 col-sm-12'>
                        <h4 style={{color:'#644F9C'}}>AVAILABLE FOR EVERYONE</h4>

                        </div>
                        <div className='col-md-12 col-sm-12'>
                        <p style={{marginTop:'10px'}}>Some quick example text to build on the card title and make up the bulk of
                        the <br/> card's content.In publishing and graphic design, Lorem ipsum is a placeholder text</p>
                        </div>


                         <div className=' row col-md-12 col-sm-12' style={{display: 'flex'}}>


                                          <div className='col-md-3 col-sm-3' style={{marginLeft:'80px'}}>
                                          <Card style={{ width: '18rem',height:'200px',clipPath:'circle()' ,marginBottom:'10px'}}>
                                          <Card.Img variant="top" src="holder.js/100px180" />
                                          
                                          </Card>
                                          <p  style={{marginRight:'90px'}} >mahabub alam</p>
                                          <Chip label="hello 1"   style={{width:'120px',marginRight:'90px',backgroundColor:'#644F9C',color:'white'}}  />

                                          
                                          </div>

                                          <div className='col-md-3 col-sm-3' style={{marginLeft:'80px'}}>
                                          <Card style={{ width: '18rem',height:'200px',clipPath:'circle()' ,marginBottom:'10px'}}>
                                          <Card.Img variant="top" src="holder.js/100px180" />
                                          
                                          </Card>
                                          <p style={{marginRight:'90px'}}>mahabub alam</p>
                                          <Chip label="hello 2"  style={{width:'120px',marginRight:'90px',backgroundColor:'#644F9C',color:'white'}} />
                                          </div>

                                          <div className='col-md-3 col-sm-3' style={{marginLeft:'80px'}}>
                                          <Card style={{ width: '18rem' ,height:'200px',clipPath:'circle()',marginBottom:'10px'}}>
                                          <Card.Img variant="top" src="holder.js/100px180" />
                                         
                                        
                                          </Card>
                                          <p style={{marginRight:'90px'}}>mahabub alam</p>
                                          <Chip label="hello 3"  style={{width:'120px',marginRight:'90px',backgroundColor:'#644F9C',color:'white'}}/>
                                          </div>


                        </div> 

    </div>
  )
}
