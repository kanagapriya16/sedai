import { Divider, Grid, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "../styles/Content2.css";
import React from "react";
import content from "../images/content.png";

export const Content2 = () => {
  const theme = useTheme();
  const gridContainerStyle = {
    display: "flex",
    flexDirection: "row", // Default direction is row
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    bgcolor: "#040c21",
    color: "#cdcbd4",
    minHeight: "80vh",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column", // Change to column below md
      flex: 1, // Allow container to take up available space
    },
  };
  const gridItemStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",

    mt: "6%",
    ml: "0px",
    width: "100%",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "row", // Change to row for sm breakpoint and below
      justifyContent: "center", // Center content horizontally
      alignItems: "center", // Center content vertically
      flexWrap: "wrap", // Allow content to wrap to the next row
    },
  };

  return (
    <>
      <Grid container spacing={3} sx={gridContainerStyle}>
        <Grid item xs={12} sm={10} md={10} lg={10} sx={{ ...gridItemStyle }}>
          <div className="text-container2" style={{ wordWrap: "break-word" }}>
            <Typography
              variant="h3"
              textAlign={"left"}
              fontWeight={600}
              color={"white"}
            >
              How cloud teams{" "}
              <Typography
                variant="h3"
                textAlign={"left"}
                fontWeight={600}
                color={"white"}
              >
                benefit from Sedai
              </Typography>
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={10} md={10} lg={10} sx={{ ...gridItemStyle }}>
          <div className="textcontainer2">
            <Stack direction={{ xs: "column", sm: "row" }} spacing={10}>
              <div className="textConteainer3">
                <Typography variant="h6" color={"white"}>
                  Cloud Savings{" "}
                  <Typography
                    variant="h2"
                    textAlign={"center"}
                    color={"skyblue"}
                    fontWeight={600}
                  >
                    {" "}
                    50%
                  </Typography>
                </Typography>
                <Typography variant="h6" color={"white"}>
                  performance gain
                  <Typography
                    variant="h2"
                    textAlign={"center"}
                    color={"skyblue"}
                    fontWeight={600}
                    justifyContent={"center"}
                    ml={1}
                    mt={1}
                  >
                    {" "}
                    75%
                  </Typography>
                </Typography>
              </div>
              <div className="textcontainr4">
                {" "}
                <Typography variant="h6" color={"white"}>
                  Fci Reduction
                  <Typography
                    variant="h2"
                    textAlign={"center"}
                    color={"skyblue"}
                    fontWeight={600}
                    justifyContent={"center"}
                    ml={1}
                    mt={1}
                  >
                    {" "}
                    70%
                  </Typography>
                </Typography>
                <Typography variant="h6" color={"white"}>
                  Productivity
                  <Typography
                    variant="h2"
                    textAlign={"center"}
                    color={"skyblue"}
                    fontWeight={600}
                    justifyContent={"center"}
                    ml={1}
                    mt={1}
                  >
                    {" "}
                    6X
                  </Typography>
                </Typography>
              </div>

              <div
                style={{
                  display: "flex",
                  marginTop: "-14%",
                }}
              >
                {" "}
                <img className="contentimg" src={content}></img>{" "}
              </div>
            </Stack>
          </div>
        </Grid>
      </Grid>
    </>
  );
};