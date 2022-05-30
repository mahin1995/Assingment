import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormControl, Navbar, Container, Nav } from 'react-bootstrap';
import Chip from '@mui/material/Chip';
// import Navbar1 from '../Sidebar/Navbar';
const Header = () => {


  var styling={
    fontSize:'20px',
    paddingRight:'30px',
    color:'#644F9C'
  }
  return (
    <div className='row col-12 ' style={{backgroundColor:'#F2F2F2'}}>


      <div className="header ">

         


 <Navbar  expand="lg" style={{height:'50px',backgroundColor:'#F2F2F2'}}>
  <Container>
    <Navbar.Brand style={styling} href="#home">Home</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
                <Nav.Link style={styling}  active href="/order">Advertise</Nav.Link>
                <Nav.Link style={styling} active href="/review">Publishers</Nav.Link>
                <Nav.Link style={styling} active href="/inventory">Influencers</Nav.Link>
                <Nav.Link style={styling} active href="/contact">AD Formats</Nav.Link>
                <Nav.Link style={styling} active href="/contact">Blog</Nav.Link>
                <Nav.Link style={styling} active href="/contact">ContactUs</Nav.Link>
                <Nav.Link style={styling} active href="/login"><Chip label="LogIn" variant="outlined" /></Nav.Link>
                {/* <Nav.Link style={styling} active href="/login"><Chip label="Logout" variant="outlined" /></Nav.Link> */}

        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

      




      </div>
      {/* <Navbar1/> */}
    </div>
  );
};

export default Header;




