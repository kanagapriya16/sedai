import { AppBar, Toolbar, Typography, Box, Divider, Menu, IconButton, MenuItem } from "@mui/material";
import React, { useState } from "react";
import "../styles/Header.css";
import { CustomButton, CustomButton1 } from "../styles/Theme";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";
import cloudImage from "../images/cloud.png";
import kubernets from "../images/Kubernetes.png";
import lambda from "../images/Amazon_Lambda.png";
import aws_ecs from "../images/ecs.png";
import Ops_Productivity from "../images/ops.png";
import application from "../images/performance.png";
import MenuIcon from '@mui/icons-material/Menu';
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

const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuIconClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (link) => {
    // Handle menu item click, e.g., navigate to the link
    // You can use your routing logic or window.location.href
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleButtononClick = () => {};

  const StyledToolbar = styled(Toolbar)({
    height:'130px',
    display: "flex",
    justifyContent: "space-between",
    background: "#000D1A",
  });

  const MenuBox = styled(Box)({
    display: "flex",
    gap: 30,
    marginLeft: "35%",
    marginTop: "4%",
    zIndex: 0,
  });

  const SearchItems = [
    {
      Name: (
        <Box className="platform">
          <Typography className="platform-text">Platform</Typography>
          <div className="platform-overview">
            <div className="platform-row">
              <div className="platform-overview-text">
                <div>
                  <img
                    src={cloudImage}
                    alt=""
                    style={{
                      position: "absolute",
                      width: "3%",
                      height: "7%",
                      marginLeft: "2%",
                      marginTop: "8%",
                    }}
                  />
                </div>
                <ul>
                  <h5>PLATFORM OVERVIEW</h5>
                  <div className="hover-effect-platform1">
                    <li>
                      <a href="#cloud" >
                        Sedai Autonomous Cloud Platform
                      </a>
                      <p>
                        Why modern apps need <br /> autonomous management
                      </p>
                    </li>
                  </div>
                </ul>
                <div>
                  <img
                    src={kubernets}
                    alt=""
                    style={{
                      position: "absolute",
                      width: "3%",
                      height: "5%",
                      marginLeft: "2%",
                      marginTop: "7%",
                    }}
                  />
                </div>
                <ul>
                  <h5>SEDAI FOR MODERN APPS</h5>
                  <div className="hover-effect-platform1">
                  <li>
                    <a href="#kuber">Kubernetes</a>
                    <p>
                      Autonomously scale, continuously <br /> optimize resources
                      and cut costs
                    </p>
                  </li>
                  </div>
                </ul>
                <div>
                  <img
                    src={lambda}
                    alt=""
                    style={{
                      position: "absolute",
                      width: "3%",
                      height: "5%",
                      marginLeft: "2%",
                      marginTop:'2%'
                    }}
                  />
                </div>
                <ul>
                <div className="hover-effect-platform1">
                  <li>
                    <a href="#kuber">AWS Lambda</a>
                    <p>
                      Continuous performance
                      <br /> optimization and autonomous
                      <br /> concurrency for serverless
                    </p>
                  </li>
                  </div>
                </ul>
                <div>
                  <img
                    src={aws_ecs}
                    alt=""
                    style={{
                      position: "absolute",
                      width: "3%",
                      height: "5%",
                      marginLeft: "2%",
                      marginTop:'2%'
                    }}
                  />
                </div>
                <ul>
                <div className="hover-effect-platform1">
                  <li>
              
                    <a href="#kuber">AWS ECS</a>
                    <p>
                      Autonomous cost and resource
                      <br /> optimization
                    </p>
                  </li>
                  </div>
                </ul>
              </div>
              <div className="divider1">
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    backgroundColor: "skyblue",
                    height: "60px",
                  }}
                />
              </div>
              <div className="platform-overview-text-capabilities">
                <div>
                  <img
                    src={cloudImage}
                    alt=""
                    style={{
                      position: "absolute",
                      width: "3%",
                      height: "7%",
                      marginLeft: "2%",
                      marginTop: "8%",
                    }}
                  />
                </div>

                <ul>
                  <h5>CAPABILITIES</h5>
                  <div className="hover-effect-platform1">
                  <li>
                    <a href="#cloud">Autonomous Optimization</a>
                    <p>
                      Cut cloud cost and tune <br /> performance
                    </p>
                  </li>
                  </div>
                </ul>
                <div>
                  <img
                    src={cloudImage}
                    alt=""
                    style={{
                      position: "absolute",
                      width: "3%",
                      height: "7%",
                      marginLeft: "2%",
                      marginTop: "1%",
                    }}
                  />
                </div>
                <ul>
                <div className="hover-effect-platform1">
                  <li>
                    <a href="#cloud">Autonomous Remidiation</a>
                    <p>
                      Improve availability and minimize <br /> Failed customer
                      interactios (FCIs)
                    </p>
                  </li>
                  </div>
                </ul>
                <div>
                  <img
                    src={cloudImage}
                    alt=""
                    style={{
                      position: "absolute",
                      width: "3%",
                      height: "7%",
                      marginLeft: "2%",
                      marginTop: "1%",
                    }}
                  />
                </div>
                <ul>
                <div className="hover-effect-platform1">
                  <li>
                    <a href="#cloud">Release intelligence</a>
                    <p>
                      Know how knew releases perform
                      <br />
                      in production
                    </p>
                  </li>
                  </div>
                </ul>
                <div>
                  <img
                    src={cloudImage}
                    alt=""
                    style={{
                      position: "absolute",
                      width: "3%",
                      height: "7%",
                      marginLeft: "2%",
                      marginTop: "1%",
                    }}
                  />
                </div>
                <ul>
                <div className="hover-effect-platform1">
                  <li>
                    <a href="#cloud">Smart SLOs</a>
                    <p>Set and optimize performance</p>
                  </li>
                  </div>
                </ul>
                <div>
                  <img
                    src={cloudImage}
                    alt=""
                    style={{
                      position: "absolute",
                      width: "3%",
                      height: "7%",
                      marginLeft: "2%",
                      marginTop: "1%",
                    }}
                  />
                </div>
                <ul>
                <div className="hover-effect-platform1">
                  <li>
                    <a href="#cloud">Integrations</a>
                    <p>Work with your existing tools</p>
                  </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </Box>
      ),
      Link: "#",
    },
    {
      Name: (
        <Box className="solution">
          <Typography variant="v6" sx={{ fontSize: "14px" }}>
            Solutions
          </Typography>
          <div className="solution-overview">
            <div className="solution-row">
              <div className="solution-overview-text">
                <div>
                  <img
                    src={cloudImage}
                    alt=""
                    style={{
                      position: "absolute",
                      width: "2%",
                      height: "5%",
                      marginLeft: "2%",
                      marginTop: "5%",
                    }}
                  />
                </div>
                <ul>
                  <h5>USE CASES</h5>
                  <div className="hover-effect-platform1">
                  <li>
                    <a href="#cloud">Cloud Cost Optimization</a>
                    <p>
                      Find 30-50% cost savings by
                      <br /> optimizating apps & infrastructure
                    </p>
                  </li>
                  </div>
                </ul>
                <div>
                  <img
                    src={cloudImage}
                    alt=""
                    style={{
                      position: "absolute",
                      width: "2%",
                      height: "5%",
                      marginLeft: "2%",
                      marginTop:'1%'
                    }}
                  />
                </div>
                <ul>
                <div className="hover-effect-platform1">
                  <li>
                    <a href="#cloud">Application Performance</a>
                    <p>
                      Improve customer experience with
                      <br /> 30-75% performance gains
                    </p>
                  </li>
                  </div>
                </ul>
                <div>
                  <img
                    src={application}
                    alt=""
                    style={{
                      position: "absolute",
                      width: "2%",
                      height: "4%",
                      marginLeft: "2%",
                      marginTop:'1%'
                    }}
                  />
                </div>
                <ul>
                <div className="hover-effect-platform1">
                  <li>
                    <a href="#cloud">Availability Improvement</a>
                    <p>
                      Reduce Failed Customer
                      <br /> Interactions (FCIs)
                    </p>
                  </li>
                  </div>
                </ul>
                <div>
                  <img
                    src={cloudImage}
                    alt=""
                    style={{
                      position: "absolute",
                      width: "2%",
                      height: "5%",
                      marginLeft: "2%",
                      marginTop:'1%'
                    }}
                  />
                </div>
                <ul>
                <div className="hover-effect-platform1">
                  <li>
                    <a href="#cloud">Ops Productivity</a>
                    <p>Cut manual toil</p>
                  </li>
                  </div>
                </ul>
                <div>
                  <img
                    src={Ops_Productivity}
                    alt=""
                    style={{
                      position: "absolute",
                      width: "2%",
                      height: "4%",
                      marginLeft: "2%",
                      marginTop:'1%'
                    }}
                  />
                </div>
                <ul>
                <div className="hover-effect-platform1">
                  <li>
                    <a href="#cloud">Release Quality</a>
                    <p>
                      Understand the performance of
                      <br /> every release
                    </p>
                  </li>
                  </div>
                </ul>
              </div>
              <div className="divider2">
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    backgroundColor: "skyblue",
                    height: "60px",
                  }}
                />
              </div>
              <div className="solution-roles">
                <div>
                  <img
                    src={cloudImage}
                    alt=""
                    style={{
                      position: "absolute",
                      width: "2%",
                      height: "5%",
                      marginLeft: "2%",
                      marginTop: "5%",
                    }}
                  />
                </div>
                <ul>
                  <h5>ROLES</h5>
                  <div className="hover-effect-platform1">
                  <li>
                    <a href="#cloud">Engineering Leaders</a>
                    <p>
                      Drive cost, performance and
                      <br /> availability with AI
                    </p>
                  </li>
                  </div>
                </ul>
                <div>
                  <img
                    src={cloudImage}
                    alt=""
                    style={{
                      position: "absolute",
                      width: "2%",
                      height: "5%",
                      marginLeft: "2%",
                      marginTop:'1%'
                    }}
                  />
                </div>
                <ul>
                <div className="hover-effect-platform1">
                  <li>
                    <a href="#cloud">CTO / Architect</a>
                    <p>
                      Integrate AI into your tech stack
                      <br /> for cost, performance and
                      <br /> availability
                    </p>
                  </li>
                  </div>
                </ul>
                <div>
                  <img
                    src={cloudImage}
                    alt=""
                    style={{
                      position: "absolute",
                      width: "2%",
                      height: "5%",
                      marginLeft: "2%",
                      marginTop:'1%'
                    }}
                  />
                </div>
                <ul>
                <div className="hover-effect-platform1">
                  <li>
                    <a href="#cloud">Site Reliability Engineering</a>
                    <p>
                      Deliver reliability with the power of
                      <br /> AI
                    </p>
                  </li>
                  </div>
                </ul>
                <div>
                  <img
                    src={cloudImage}
                    alt=""
                    style={{
                      position: "absolute",
                      width: "2%",
                      height: "5%",
                      marginLeft: "2%",
                    }}
                  />
                </div>
                <ul>
                <div className="hover-effect-platform1">
                  <li>
                    <a href="#cloud">Platform Engineering</a>
                    <p>
                      Provides a powerful tool for
                      <br /> engineers to optimize their
                      <br />
                      application
                    </p>
                  </li>
                  </div>
                </ul>
                <div>
                  <img
                    src={cloudImage}
                    alt=""
                    style={{
                      position: "absolute",
                      width: "2%",
                      height: "5%",
                      marginLeft: "2%",
                    }}
                  />
                </div>
                <ul>
                <div className="hover-effect-platform1">
                  <li>
                    <a href="#cloud">FinOps</a>
                    <p>
                      Optimize cloud costs with
                      <br /> integrated engineering & financial
                      <br />
                      optimization
                    </p>
                  </li>
                  </div>
                </ul>
                <div>
                  <img
                    src={cloudImage}
                    alt=""
                    style={{
                      position: "absolute",
                      width: "2%",
                      height: "5%",
                      marginLeft: "2%",
                    }}
                  />
                </div>
                <ul>
                <div className="hover-effect-platform1">
                  <li>
                    <a href="#cloud">DevOps</a>
                    <p>
                      Know how new releases perform
                      <br /> in production
                    </p>
                  </li>
                  </div>
                </ul>
                <div>
                  <img
                    src={cloudImage}
                    alt=""
                    style={{
                      position: "absolute",
                      width: "2%",
                      height: "5%",
                      marginLeft: "2%",
                    }}
                  />
                </div>
                <ul>
                <div className="hover-effect-platform1">
                  <li>
                    <a href="#cloud">Performance Engineering</a>
                    <p>
                      Optimize performance
                      <br /> automatically
                    </p>
                  </li>
                  </div>
                </ul>
              </div>
              <div className="divider2">
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    backgroundColor: "skyblue",
                    height: "60px",
                  }}
                />
              </div>
              <div className="solution-industries">
                <div>
                  <img
                    src={cloudImage}
                    alt=""
                    style={{
                      position: "absolute",
                      width: "2%",
                      height: "5%",
                      marginLeft: "2%",
                      marginTop: "4%",
                    }}
                  />
                </div>
                <ul>
                  <h5>INDUSTRIES</h5>
                  <div className="hover-effect-platform1">
                  <li>
                    <a href="#cloud">Ecommerce</a>
                    <p>
                      Drive site coversion & optimize
                      <br /> margins
                    </p>
                  </li>
                  </div>
                </ul>
                <div>
                  <img
                    src={cloudImage}
                    alt=""
                    style={{
                      position: "absolute",
                      width: "2%",
                      height: "5%",
                      marginLeft: "2%",
                    }}
                  />
                </div>
                <ul>
                <div className="hover-effect-platform1">
                  <li>
                    <a href="#cloud">Cybersecurity</a>
                    <p>
                      Meet the threat with high reliability
                      <br /> & optimized costs
                    </p>
                  </li>
                  </div>
                </ul>
                <div>
                  <img
                    src={cloudImage}
                    alt=""
                    style={{
                      position: "absolute",
                      width: "2%",
                      height: "5%",
                      marginLeft: "2%",
                    }}
                  />
                </div>
                <ul>
                <div className="hover-effect-platform1">
                  <li>
                    <a href="#cloud">Online Travel</a>
                    <p>
                      Improve traveler experience &
                      <br /> optimize cloud costs
                    </p>
                  </li>
                  </div>
                </ul>
                <div>
                  <img
                    src={cloudImage}
                    alt=""
                    style={{
                      position: "absolute",
                      width: "2%",
                      height: "5%",
                      marginLeft: "2%",
                    }}
                  />
                </div>
                <ul>
                <div className="hover-effect-platform1">
                  <li>
                    <a href="#cloud">B2B SaaS</a>
                    <p>
                      Improve online experience & <br /> optimize cloud costs
                    </p>
                  </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </Box>
      ),
      Link: "#",
    },
    {
      Name: (
        <Typography className="t1" variant="v6" sx={{ fontSize: "14px" }}>
          Pricing
        </Typography>
      ),
      Link: "#",
    },
    {
      Name: (
        <Box className="resource">
          <Typography variant="v6" sx={{ fontSize: "14px" }}>
            Resource
          </Typography>
          <div className="dropdown-company">
            <div className="content-a">
              <a href="#all">All</a>
              <a href="#event">Events</a>
              <a href="#solution">Solution Briefs</a>
              <a href="#customer">Customer Stories</a>
              <a href="#data">Datasheets</a>
              <a href="#videos">Videos</a>
              <a href="#calculator">ROI Calculator</a>
              <a href="#documentaion">Documentation</a>
            </div>
          </div>
        </Box>
      ),
      Link: "#",
    },
    {
      Name: (
        <Box className="company">
          <Typography
            variant="v6"
            sx={{ fontSize: "14px" }}
            className="company-text"
          >
            Company
          </Typography>
          <div className="dropdown-company">
            <div className="content-a">
              <a href="#about">About</a>
              <a href="#blog">Blog</a>
              <a href="#aws">AWS Partnership</a>
              <a href="#careers">Careers</a>
            </div>
          </div>
        </Box>
      ),
      Link: "#",
    },
    {
      Name: (
        <Typography
          className="t1"
          variant="v6"
          sx={{ fontSize: "14px", fontWeight: "bold" }}
        >
          Login
        </Typography>
      ),
      Link: "#",
    },
    {
      Name: (
        <Typography>
          <SearchIcon sx={{ color: "gray" }} />
        </Typography>
      ),
      Link: "#",
    },
  ];

  return (
    <>
      <AppBar
       id='navbar'
       position={"sticky"}
      >
        <StyledToolbar >
          <Typography>
            <img
              className="cosecant_logo"
              src="https://assets-global.website-files.com/6218de564a814751871bcb7d/621cd3f6de9cbc4708382435_sedai_logo.svg"
              alt="cosecant logo"
            />
          </Typography>

   <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuIconClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {SearchItems.map((content, index) => (
                <MenuItem key={index} onClick={() => handleMenuItemClick(content.Link)}>
                  {content.Name}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        
          <Box sx={{ display: { xs: 'none', md: 'block' }, width:"57%" }}>
          <MenuBox>
            {SearchItems.map((content) => (
              <Typography sx={{ cursor: "pointer" }}>{content.Name}</Typography>
            ))}
          </MenuBox></Box>
          <CustomButton
            onClick={handleButtononClick}
            label="START FREE"
            style={{ zIndex: 1 }}
          />
          <CustomButton1
            onClick={handleButtononClick}
            label="BOOK DEMO"
            style={{ zIndex: 1 }}
          />
        </StyledToolbar>
      </AppBar>
    </>
  );
}

export default Header;
