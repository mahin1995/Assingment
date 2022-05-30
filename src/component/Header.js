import React from 'react';
import { Link } from 'react-router-dom';
import {  Navbar, Container, Nav } from 'react-bootstrap';
import Chip from '@mui/material/Chip';
const Header = () => {


  var styling={
    fontSize:'20px',
    paddingRight:'30px',
    color:'#644F9C'
  }
  return (
    <div className='row col-12 ' style={{backgroundColor:'#F2F2F2'}}>


      <div className="header ">


 <Navbar  expand="lg" style={{height:'80px',backgroundColor:'#F2F2F2'}}>
  <Container>
    <Navbar.Brand style={{marginRight:'80px',color:'#FF6F00'}} href="#">Home</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="">
      <Nav className="me-auto" >
                <Nav.Link style={styling}  active href="#">Advertise</Nav.Link>
                <Nav.Link style={styling} active href="#">Publishers</Nav.Link>
                <Nav.Link style={styling} active href="#">Influencers</Nav.Link>
                <Nav.Link style={styling} active href="#">AD Formats</Nav.Link>
                <Nav.Link style={styling} active href="#">Blog</Nav.Link>
                <Nav.Link style={styling} active href="#">ContactUs</Nav.Link>
                <Nav.Link style={styling} active href="#"><Chip label="LogIn" variant="outlined" clickable  /><Chip color="success" label="signup" clickable/></Nav.Link>

        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar> 

      




      </div>
    </div>
  );
};

export default Header;




