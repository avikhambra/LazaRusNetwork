import React from 'react'
import './Testimonial.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Avatar from '@mui/material/Avatar';

const Testimonial = () => {
  
  return (
    
    <div className='testimonial' style={{dispay: 'flex' , justifyContent: 'center' , marginTop: 10}}>

        {/* <h1>CLIENTS</h1> */}
        
        <div style={{width: '50%'}} >
          
          <Slider>
          
            <Card img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNjm343NNiVWCDHBkoxWT5eYE5BTNHxmnZUQMWvpex&s"/>  
            <Card img = "https://st.depositphotos.com/1000686/3738/i/600/depositphotos_37383675-stock-photo-portrait-of-a-young-beautiful.jpg"/> 
            <Card img = "https://images.pexels.com/photos/1212805/pexels-photo-1212805.jpeg?cs=srgb&dl=pexels-samer-daboul-1212805.jpg&fm=jpg"/> 
            <Card img = "https://freepngimg.com/thumb/man/22654-6-man-thumb.png"/> 
             
          </Slider>  
          
        </div> 


    </div>
  )
}

const Card = ({img}) => {
    return(
        <div style={{display: 'flex' , alignItems: 'center' , flexDirection:'column' , textAlign:'center'  , paddingTop:"70px" }}>

            <Avatar imgProps={{style: {borderRadius: '50%'}}} 
                    src = {img} 
                    style={{width:120 , height:120 , border:'1px solid lightgray' , padding:7}} />

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Eveniet odio eius totam reiciendis vitae incidunt 
              repellat ipsam explicabo eaque eum.
              Veniam porro iste nulla accusantium optio, 
              dignissimos quidem id. Ipsum eius facilis modi aspernatur maxime error repudiandae quidem molestiae tenetur? 
              Voluptate facere tenetur deserunt beatae ab nihil earum voluptas iu
            </p>

            <p style={{fontStyle: 'italic' , marginTop: 25}}>
              <span style={{fontWeight: 500 , color: 'green'}} >PAULA WILSON</span>
              , Media Analyst
            </p>

        </div> 
    )
}


export default Testimonial