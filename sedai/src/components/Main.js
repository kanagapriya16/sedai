import React from 'react'
import Header from './Header'
import { Box, Button, Stack, Typography } from '@mui/material'
import '../styles/main.css'
import { CustomButton } from './CustomButton'
import { CustomButton1 } from './CustomButton1'
import AutoSlide from './AutoSlide'
import Footer from './Footer'
import { Content } from './Content'
import FirstPage from './FirstPage'
import { Content2 } from './Content2'
import Content3 from './Content3'
import Container from './Container'

const Main = () => {
return (
        <>
        <Header/>
       
        <Box  sx={{
        backgroundRepeat:"no-repeat",
        backgroundColor:"#000D1A",
        backgroundSize:"cover",
        height:900,
        width:"100%",
        display:"flex",
        justifyContent:"center"
    
    
    }}>
      <Box sx={{marginRight:"15%"}}>
      <Typography className='headings' variant='h1' sx={{textAlign:"left",marginTop:"10%",color:"white",fontWeight:"600",marginLeft:"-40%",fontSize:60}}>Go autonomous <br/>for maximum <br/>
      <div class="container">
          <div class="text-container">
            <ul class="dynamic-text">
              <li class="item">Savings</li>
              <li class="item">Performance</li>
              <li class="item">Availablity</li>
              <li class="item">Productivity</li>
            </ul>
          </div>
        </div>
      
  </Typography>
<br/>
<Box sx={{marginTop:"-235%",height:"10%",width:"250%",marginLeft:"-40%" }}>


      <Typography className='headingss' variant='h6' sx={{color:"white",marginLeft:"0",textAlign:"left",}}>Accelarate Strategy Execution and Consistency in Revenue Growth <br/> We are commited to providing our clients the best strategic <br/>guidance available</Typography>
  
   
     
      </Box>
      <Box sx={{
        ml:"-4%",
        position:"absolute",
        flexDirection:"row",
        justifyContent:"space-between",
        width:"30vw",
        height:"30vh",
        marginTop:"1%"
       
      }}>     
       <CustomButton 
      label={"BOOK DEMO"}/>
      <Box sx={{
      mt:"-12%",
      height:"30vh",
      ml:"-5%"
      }}> 
      <CustomButton1
      label={"START FREE"}/>
      </Box>
      </Box>

    </Box>
   
    <Box sx={{backgroundColor:"",height:"60%",width:"40%",position:"absolute",marginLeft:"45%"}}>
    <FirstPage/>
   </Box>
</Box>
<AutoSlide/> 
<Content/>
<Content2/>
<Content3/>
<Container/>
<Footer/>
</>
      )
    }
    


export default Main
