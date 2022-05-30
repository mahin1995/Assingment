import React from 'react'
import { Card} from 'react-bootstrap';
import Chip from '@mui/material/Chip';
import message from '../images/download.png'
import software from '../images/download (1).png'
import wifi from '../images/images.png'

export const Service = () => {
  return (
    <div style={{marginTop:'50px',background:'#F2F2F2',boxShadow: '5px 10px 18px gray'}} className='card'>


          <div className='col-md-12 col-sm-12'>
                        <h4 style={{color:'#644F9C'}}>AVAILABLE FOR EVERYONE</h4>

                        </div>
                        <div className='col-md-12 col-sm-12'>
                        <p style={{marginTop:'10px'}}>Some quick example text to build on the card title and make up the bulk of
                        the <br/> card's content.In publishing and graphic design, Lorem ipsum is a placeholder text</p>
                        </div>


                         <div className=' row col-md-12 col-sm-12' style={{ display: 'flex'}}>


                                          <div className='col-md-3 col-sm-3' style={{marginLeft:'80px'}}>
                                          <Card style={{ width: '18rem',height:'200px',clipPath:'circle()' ,marginBottom:'10px'}}>
                                            <Card.Title></Card.Title>
                                            <Card.Body>
                                              <Card.Text>
                                              <img style={{height:'120px'}}
                                                src={message}
                                                alt="Second slide"
                                              />
                                              </Card.Text>
                                            </Card.Body>
                                         
                                          
                                          </Card>
                                          <p  style={{marginRight:'90px'}} >mahabub alam</p>
                                          <Chip label="hello 1" component="a" href="#chip" clickable    style={{width:'120px',marginRight:'90px',backgroundColor:'#644F9C',color:'white',marginBottom:'8px'}}  />

                                          
                                          </div>

                                          <div className='col-md-3 col-sm-3' style={{marginLeft:'80px'}}>
                                          <Card style={{ width: '18rem',height:'200px',clipPath:'circle()' ,marginBottom:'10px'}}>
                                          <Card.Img variant="top" src="holder.js/100px180" />
                                          <Card.Title></Card.Title>
                                            <Card.Body>
                                              <Card.Text>
                                              <img style={{height:'100px'}}
                                                src={wifi}
                                                alt="Second slide"
                                              />
                                              </Card.Text>
                                            </Card.Body>
                                          </Card>
                                          <p style={{marginRight:'90px'}}>mahabub alam</p>
                                       <Chip label="hello 2"  style={{width:'120px',marginRight:'90px',backgroundColor:'#644F9C',color:'white',marginBottom:'8px'}} component="a" href="#chip" clickable  />
                                          </div>

                                          <div className='col-md-3 col-sm-3' style={{marginLeft:'80px'}}>
                                          <Card style={{ width: '18rem' ,height:'200px',clipPath:'circle()',marginBottom:'10px'}}>
                                          
                                          <Card.Title></Card.Title>
                                            <Card.Body>
                                              <Card.Text>
                                              <img style={{height:'140px'}}
                                                src={software}
                                                alt="Second slide"
                                              />
                                              </Card.Text>
                                            </Card.Body>
                                        
                                          </Card>
                                          <p style={{marginRight:'90px'}}>mahabub alam</p>
                                          <Chip label="hello 3"  style={{width:'120px',marginRight:'90px',backgroundColor:'#644F9C',color:'white',marginBottom:'8px'}} component="a" href="#chip" clickable  />
                                          </div>


                        </div> 



            </div>           
  )
}
