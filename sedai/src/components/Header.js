import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import '../styles/Navbar.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function Header() {
    function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-100px";
        }
    }
    window.onscroll = function () {
        scrollFunction()
    };
   
    const MenuBox = styled(Box)({
        display: "flex",
        gap: 40,
        marginRight: "90px"
    })
    const SearchItems = [
        { Name: <Typography className='a1' >Platform #8964;</Typography>, Link: "#" },
        { Name: <Typography className='about'>Solutions <KeyboardArrowDownIcon sx={{}}/>
        <div className='submenu1'>
        <ul>
           <li className='hover-me'><a href='jerald'>jerald<ArrowForwardIosIcon sx={{fontSize:"small",float:"right",marginTop:"4px"}}/></a>
           <div className='submenu2'>
            <ul>
                <li><a href='football'>Footbal</a></li>
                <li><a href='cricket'>Cricket</a></li>
                <li><a href='tennis'>Tennis</a></li>
            </ul>
           </div>
           </li>
            <li><a href='jerald jr'>jeraldJR<ArrowForwardIosIcon sx={{fontSize:"small",float:"right",marginTop:"4px"}}/></a></li>
            <li className='hover-me'><a href='jerald10'>jerald10<ArrowForwardIosIcon sx={{fontSize:"small",float:"right",marginTop:"4px"}}/></a>
            <div className='submenu2'>
            <ul>
                <li><a href='football'>Footbal</a></li>
                <li><a href='cricket'>Cricket</a></li>
                <li><a href='tennis'>Tennis</a></li>
            </ul>
           </div>
            </li>
        </ul>
        </div>
        </Typography>, Link: "#" },
        {
            Name: <Typography className='service'>Pricing
                <div className='dropdown-content'>
                   <a href='consulting'>Consulting<ArrowForwardIosIcon sx={{fontSize:"small",float:"right",marginTop:"4px"}}/></a>
                    <div className='submenu'>
                   <a href='information'>Informatica</a>
                       <a href='salesforce'>Salesforce</a>
                     <a href='postgresql'>PostgresQL/SQL Server/Oracle </a>
                      <a href='web development'>Web Development</a>
                    </div>
                    <div>
                    <a href='arrow icon'>Training<ArrowForwardIosIcon sx={{fontSize:"small",float:"right",marginTop:"4px"}}/></a>
                    </div>
                </div>
            </Typography>, Link: "#"
        },
        { Name: <Typography className='a1'>Resources</Typography>, Link: "#" },
        { Name: <Typography className='a1'>Company</Typography>, Link: "#" },
        { Name: <Typography className='a1'>Login</Typography>, Link: "#" },
        { Name: <Typography className='a1'><SearchIcon/></Typography>, Link: "#" },
    ]
    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between",
    })
    return (
        <>
            <AppBar elevation={0}
                // className='navbar1'
                id='navbar'
                sx={{
                    position: "sticky",
                }}
            >
                <StyledToolbar sx={{
                    background: "black",
                    height: "90px",
                }}>
                    <Typography>
                        <img className='cosecant_logo' src='https://assets-global.website-files.com/6218de564a814751871bcb7d/621cd3f6de9cbc4708382435_sedai_logo.svg' alt='cosecant logo' sx={{marginRight:"20%"}} />
                    </Typography>
                    <MenuBox>
                        {
                            SearchItems.map((content) => (
                                <Typography sx={{ cursor: "pointer" }}>{content.Name}</Typography>
                            ))
                        }
                    </MenuBox>
                </StyledToolbar>
            </AppBar>
        </>
    )
}
export default Header
