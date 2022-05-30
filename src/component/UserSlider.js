import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Card} from 'react-bootstrap';
import Chip from '@mui/material/Chip';
// import './userslider.css'
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div style={{background:'#F2F2F2',marginTop:'30px'}} >
        <h2> Single Item</h2>
        <Slider {...settings}>
         
          <div >
            
            
          <img style={{ height: '400px' }}
                          className="d-block w-100"
                          src='https://availtrade.com/public/images/1647422715426Screenshot_2.png'
                          alt="Second slide"
                        />
         
          </div>
          <div>
          <img style={{ height: '400px' }}
                          className="d-block w-100"
                          src='https://availtrade.com/public/images/1647422715426Screenshot_2.png'
                          alt="Second slide"
                        />
          </div>
          <div>
          <img style={{ height: '400px' }}
                          className="d-block w-100"
                          src="https://availtrade.com/public/images/1647423019322Screenshot_3.png"
                          alt="Third slide"
                        />
          </div>
          <div>
          <img style={{ height: '400px' }}
                          className="d-block w-100"
                          src='https://availtrade.com/public/images/1647422533576Screenshot_1.png'
                          alt="First slide"
                        />
          </div>
          <div>
             <img style={{ height: '400px' }}
                          className="d-block w-100"
                          src='https://availtrade.com/public/images/1647422715426Screenshot_2.png'
                          alt="Second slide"
                        />
          </div>
          
        </Slider>
      </div>
    );
  }
}