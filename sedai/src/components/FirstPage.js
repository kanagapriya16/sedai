
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/Firstpage.css'
import { Typography } from "@mui/material";

const FirstPage = () => {
  const testimonialData = [
    {
      name: "harbour-postgresql",
      disc: "90% Cost reduction ",
      title: "Changed iops",
    },
    {
      name: "commerce-checkout",
      disc: "17% cost reduction",
      title: "Changed iops",
      
    },
    {
      name: "global-service-ingest-gke",
      disc: "22% latency reduction",
      title: "Changed iops",
    },
    {
      name: "prodol-pim-item-get-product list",
      disc: "9.6 release score",
      title: "moderate",
    },
    {
      name: "vulnerablity scanner",
      disc: "56% latency reduction",
      title: "large instance",
    },
    {
        name: "copilot API-prod",
        disc: "25% Cost reduction",
        title: "Changed iops",
      },
      {
        name: "ecs-prometheus-cluster",
        disc: "25% Cost reduction",
        title: "Changed iops",
      },
      {
        name: "customer-reviews-volume",
        disc: "52% IOPS increase",
        title: "Changed iops",
      },
      {
        name: "commerce-start payment",
        disc: "83% cold-start reduction",
        title: "Changed iops",
      },
      {
        name: "commerce-price-bulk-insert",
        disc: "99% latency reduction",
        title: "Changed iops",
      },
      {
        name: "integration alphaservices-QK3",
        disc: "34% cost reduction",
        title: "activated plan",
      },
    
  ];
  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 700,
    draggable: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    vertical: true, 
    verticalSwiping: true, 
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          vertical: false, 
          verticalSwiping: false, 
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          vertical: false, 
          verticalSwiping: false, 
        },
      },
    ],
  };
  return (
    <section style={{ height: "1200%" }}>
   
      <div>
    

        <Slider {...sliderSettings}>
   
          {testimonialData.map((testimonial, index) => (
            <div key={index}>
               <div style={{backgroundColor:"pink",color:"pink",height:"10%",width:"0%",position:"absolute",marginTop:"8%",marginRight:"-100%"}}>
               <h1><img style={{height:"1%",width:"20px"}} src='https://assets-global.website-files.com/6218de564a814751871bcb7d/6391db258b16d63fee15e77c_Lambda.png' alt='cosecant logo'  /></h1></div>
              <div className="shadow-effect">
             
            
                <p
           style={{
            height: "70%",  
            width: "auto",   
            borderRadius: "50px",
            backgroundColor: "#74a2a2",
            marginLeft: "1.5%",
            marginTop: "1.1%",
            marginRight: "3%",
        
            textAlign: "center",
            display: "flex",
            alignItems: "center", 
            justifyContent: "center", 
          }}
                >
                  &nbsp;&nbsp;&nbsp;{testimonial.name}&nbsp;&nbsp;&nbsp;
                </p>
                <p style={{textAlign:"center",marginLeft:"2%",paddingTop:"3%"}}>{testimonial.disc}</p>
                <p style={{color:"darkgray",textAlign:"center",marginLeft:"2%",paddingTop:"3%"}}>&nbsp;&nbsp;&nbsp;{testimonial.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
export default FirstPage;