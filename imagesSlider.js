import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css"
import { Typography } from "@mui/material";
import React from 'react'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone'
import Paper from "@mui/material/Paper";

const ImageSlider = ({images}) => {
  const paperStyle={padding: '30px 20px' ,width:230,margin:"20px auto"}
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
  autoplaySpeed: 1000,
   
  };
  return (
    <>
    <div className="tag">
    </div>
    <Typography variant='h3' sx={{ color: '#5f4339' }}>YOUR DREAM IS JUST A CLICK AWAY !</Typography><br/>
      <div className="imgslider">
        <Slider {...settings}>
          {images.map((item) => (
            <div key={item.id}>
              <img src={item.logo} height="6cm" width="10pcm"/>
            </div>
          ))}
        </Slider>
      </div>
      <br/>
      <Typography variant='h6'>Avinash Properties focuses on building aesthetically and structurally remarkable projects. A full service landholding development company that offers the best commercial properties and residential properties in Vijayawada. Avinash Properties has changed the outlook of modern Vijayawada into a global city by being responsible for several landmark developments. With a vast portfolio of residential projects, Avinash Properties has emerged as South India's most trusted developers. Whether it's for a prime residential property or a plotted development</Typography><br/><br/>
      <h2>Contact Servies</h2>
      <Paper elevation={30} style={paperStyle}>
        <ContactMailIcon  color="success"sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 , height:"50px",width:"50px"}}/>Mail: 
        <a href="mailto:sthiraproperties@gmail.com">avinashproperties@gmail.com</a> <br/>   
        <ContactPhoneIcon color="success"sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 , height:"50px",width:"50px"}}/>Phone: 
        <a href="callto:7288982069">7288982069</a>
        </Paper>
        </>
  )
}
export default ImageSlider;
