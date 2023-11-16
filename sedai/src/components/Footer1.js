import { Button, TextField } from "@mui/material";
import { Box, Divider, Grid, Typography } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";

const Footer1 = () => {
  const theme = useTheme();
  const gridContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    bgcolor: "#040c21",
    color: "#cdcbd4",
    minHeight: "40vh",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column", // Change to column below md
      flex: 1, // Allow container to take up available space
    },
  };
  const gridItemStyle = {
    display: "flex",
    justifyContent: "space-around",
    ml: "0px",
    width: "100%",

    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      alignItems: "center",
    },
  };
  const LinkStyle = {
    whiteSpace: "nowrap", 
    marginBottom: "20px",
  };
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
   
    console.log("Email submitted:", email);
  };

  const textFieldStyle = {
    borderRadius: "50px", 
    height: "54px",
    width: "450px",
  };

  const buttonStyle = {
    borderRadius: "50px", 
    marginLeft: "-150px", 
    height: "56px",
    width: "150px",
  };
  return (
    <>
      <Grid container sx={gridContainerStyle}>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          sx={{ ...gridItemStyle, flexDirection: "column" }}
        >
          <div style={{ ...gridItemStyle }}>
            {" "}
            <img
              src="https://assets-global.website-files.com/6218de564a814751871bcb7d/638f1fb8823d9a4deb74cac9_6287e055dda64d22f4f1f9c1_image%20(1)%201-p-500%201.png" // Replace with the path to your logo
              alt="Company Logo"
              height="80px"
              width="80px"
            />
            <img
              src="https://assets-global.website-files.com/6218de564a814751871bcb7d/638f1f8856fe41e061d3b475_aws-partner-logo%201.png" // Replace with the path to your logo
              alt="Company Logo"
            />
            <img
              src="https://assets-global.website-files.com/6218de564a814751871bcb7d/6396c03c9db8fe47563039d6_aws-parner-p-500.png" // Replace with the path to your logo
              alt="Company Logo"
              height="80px"
              width="80px"
            />
            <img
              src="https://assets-global.website-files.com/6218de564a814751871bcb7d/638f1fc4329ae9f4d147b4ec_download%20(1)%201.png" // Replace with the path to your logo
              alt="Company Logo"
              height="80px"
              width="80px"
            />
          </div>
          <div style={{ marginTop: "60px", marginLeft: "20px" }}>
            <p>© Copyright Sedai Inc. 2023</p>
          </div>
        </Grid>
​
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          sx={{ ...gridItemStyle, flexDirection: "column" }}
        >
          <Typography variant="h4">Subscribe</Typography>
          <br /> <br />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <input
              id="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              style={textFieldStyle}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              style={buttonStyle}
            >
              Submit
            </Button>
          </Box>
          <p>
            Stay up-to-date on all things autonomous. Sign up with your <br />{" "}
            email address to receive news and updates.
          </p>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <p>JOIN OUR SLACK COMMUNITY</p> &nbsp;&nbsp;&nbsp;
            <a href="#">
              <button
                onClick={handleSubmit}
                style={{
                  width: "180px",
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Join us on
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPQAAAB5CAMAAAA53/zKAAAAwFBMVEX////4+PgrrHbirDdEvt/NJVP29fY8vN7hqSnLDkgYqG/y+vzB5vPmo7HgpyLLFEpmv5dryuTYZH/u0JnqxXul1r/cdo323ePmuVzQ7fbd8ehbu5Dx+fX78+Xovmv++/ac07m+4tHm9fpzw56j2+1ItIX45urRPWPKAEDvxM7ltVHz0dmz4fB6zuc6r32x3MiQ1eqHzK3L59rhip7fgJbrr73syoj148PjmKjz3bfUUHDrucTIADffowDx1qj36dH5X6x3AAAEFUlEQVR4nO2dWVfqMBCAK5RuQKGC7AhUkEIBcQHBq/D//9VtugYb+uQEdPKd40Pn5GE+kmaZoEqKcoMMRZEUCR2KdHPpFPhzI6SRIKSxIKSxIKSxIKSxIKSxIKSxIKSxIKSxIKSxIKSxIKR5UPQ4jfQ8+ObAWbq4WMqyNW4nkc6wu5pUn7hq85VuL1VVlr2fUhQZrQwjZxhGtcMxDa7StuwpB4TWo1yIseLY11yll7Gzatkk0JsYsfUDvzx4Stuxs2ftd/VT7OxZ8xvgPKUXtPSaRJ5p6SduiVxMekkiVVr6jlsiQhoYG6O0ZKkIpdsYe1oqqSo+acleR12NSNrTbgf4OzIs0icIaSENCrC0XWKQlBDY0r2X0Qj0oAkqXVyTikEK2VqEDVjSveHKe1o9AGpDStsqte+kUdV1UCdjSHfCI7YBeNQElLatM85Ee+w3YUjHZQVjAmYNKD0+7yyr8pl1miorGEOozOCkszo66uq0dJUKdKFea0DpLOdze+/OJEcBNb4vJm2RNtnSYFMZoHSWM6tGNpJ+f08Xl5nvdKoamiNvMC1tgC3VgLN3KWv2Duve3aTu/UwCJ9Jg5VHIzcn6rLWa3HAY0arsdyslHXwKIIBuQ9esTSjBSu6yJoZPOJQ74aNh5OCcgQ8c7fHSSrNe2EmTzt1Dt/ocHTA61a5PdfgCmBb00bLI4rTJyfV0LwQ0KfFNBCwI6R/ncfba8Hl7jCKbt0bZpX6pdXA8bOspau8DwLRApTfTTz1g2vQDyk53dN1xGs2oSb9umloa82u+h8sLUnqjVwohoXRDDx71j9C63zLzbDQTzhpQelZICKTLTvSsN/wRPrjXzjgTjlCZwUkrUbfG0gr1Kegz0ub9XD/7fV2Heq/hpB+nlW/S/6hPQX8lbWpZ0vl5Hyg1OOkm5RxIlynpyi1pkzm685qQ/kE4De8PMm+lpf/c8KYnsuANTksfMyey7e+byKTmNDYs+AtUWnqwzbCe/8Ily5utnWCA6wV/fWJIZ25O3sESA92Gzqafju583rrBI0NaGtS/TBZfczhn6FOWW97t3OiBJe119r7GAGxoE3geLdnSF0BIAyOkfel+CGTFgMFlpbfzlk/9wFX7stL3wSqtaVoLasvJ4sLS8YFDy3O0vhbpvFnnlsf1SMMdJNNckTRg+fMbVyR94JYIT+kNXSNrkEj970u7lLRTJpE9dbA0Qc8YJ3C9y/qgCkh+IbxPdXSLXx5cpd34ykPfBZGDeYGO5nxr+a/gW1eCmhmhZmrB3gSwZpCC81Vt821aKExvN0lkfz/P5+dbnrtQ/vfTTdd1T/788OB4PHJVFpfyeBDSWBDSWBDSWBDSWBDSWBDSWBDSWBDSWBDSWBDSWBDSWEAqjfK/HSoI+Q8zJmqU3deGKAAAAABJRU5ErkJggg=="
                  height="40px"
                  width="80px"
                />
              </button>
            </a>
          </Box>
          <div style={LinkStyle}>
            <a href="#">Privacy Policy</a>
            &nbsp;&nbsp;&nbsp;
            <a href="#">Terms of use</a>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer1;