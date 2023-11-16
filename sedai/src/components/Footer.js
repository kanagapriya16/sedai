import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import Footer1 from "./Footer1";
const Footer = () => {
  const theme = useTheme();
  const gridContainerStyle = {
    display: "flex",
    flexDirection: "row", 
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    bgcolor: "#040c21",
    color: "#cdcbd4",
    minHeight: "80vh",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column", 
      flex: 1, 
    },
  };
  const gridItemStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
    mt: "2%",
    ml: "0px",
    width: "100%",
  };
  const LinkStyle = {
    whiteSpace: "nowrap", 
    marginBottom: "20px",
  };
  return (
    <>
      <Grid container spacing={3} sx={gridContainerStyle}>
        <Grid item xs={12} sm={6} md={4} lg={1} sx={{ ...gridItemStyle }}>
          <img
            src="https://assets-global.website-files.com/6218de564a814751871bcb7d/6229d34ed692ff6340420dff_footer_logo.svg" // Replace with the path to your logo
            alt="Company Logo"
            width="150px"
            style={{
              marginTop: "5px",
              marginBottom: "20px",
            }}
          />
          <div>
            <img
              src="https://assets-global.website-files.com/6218de564a814751871bcb7d/622e22788210ff0c88868d1e_Social%20icon.svg" // Replace with the path to your logo
              alt="Company Logo"
              height="30px"
              width="50px"
            />
            <img
              src="https://assets-global.website-files.com/6218de564a814751871bcb7d/622e227876cb673258723796_Social%20icon-1.svg" // Replace with the path to your logo
              alt="Company Logo"
              height="30px"
              width="50px"
            />
          </div>
        </Grid>{" "}
        <Grid item xs={12} sm={6} md={4} lg={1} sx={{ ...gridItemStyle }}>
          <Typography variant="h4" style={LinkStyle}>
            Company
          </Typography>
          <a href="#" style={LinkStyle}>
            About Us
          </a>
          <a href="#" style={LinkStyle}>
            Careers
          </a>
          <a href="#" style={LinkStyle}>
            Contact
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={1} sx={{ ...gridItemStyle }}>
          <Typography variant="h4" style={LinkStyle}>
            Platform
          </Typography>
          <a href="#" style={LinkStyle}>
            Platform
          </a>{" "}
          <a href="#" style={LinkStyle}>
            Kubernetes
          </a>
          <a href="#" style={LinkStyle}>
            AWS Lambda
          </a>
          <a href="#" style={LinkStyle}>
            AWS ECS
          </a>
          <a href="#" style={LinkStyle}>
            Pricing
          </a>
          <a href="#" style={LinkStyle}>
            Docs
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={1} sx={{ ...gridItemStyle }}>
          <Typography variant="h4" style={LinkStyle}>
            {" "}
            Capabilities
          </Typography>
          <a href="#" style={LinkStyle}>
            Autonomous Optimization
          </a>
          <a href="#" style={LinkStyle}>
            Autonomous Remediation
          </a>
          <a href="#" style={LinkStyle}>
            Release Intelligence
          </a>
          <a href="#" style={LinkStyle}>
            Smart SLOs
          </a>
          <a href="#" style={LinkStyle}>
            Integration
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={1} sx={{ ...gridItemStyle }}>
          <Typography variant="h4" style={LinkStyle}>
            {" "}
            Use Cases
          </Typography>
          <a href="#" style={LinkStyle}>
            Cloud Cost Optimization
          </a>
          <a href="#" style={LinkStyle}>
            Application Performance
          </a>
          <a href="#" style={LinkStyle}>
            Availability Improvement
          </a>
          <a href="#" style={LinkStyle}>
            Ops Productivity
          </a>
          <a href="#" style={LinkStyle}>
            Release Quality
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={1} sx={{ ...gridItemStyle }}>
          <Typography variant="h4" style={LinkStyle}>
            Resources
          </Typography>
          <a href="#" style={LinkStyle}>
            Events
          </a>
          <a href="#" style={LinkStyle}>
            Solution Briefs
          </a>
          <a href="#" style={LinkStyle}>
            Customer Stories
          </a>
          <a href="#" style={LinkStyle}>
            Datasheets
          </a>
          <a href="#" style={LinkStyle}>
            Videos
          </a>
          <a href="#" style={LinkStyle}>
            ROI Calculator
          </a>
          <a href="#" style={LinkStyle}>
            Documentation
          </a>
        </Grid>
      </Grid>
      <Footer1 />
    </>
  );
};
export default Footer;