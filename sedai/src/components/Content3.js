import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

const Content3 = () => {
  const theme = useTheme();
  const gridContainerStyle = {
    display: "flex",
    flexDirection: "row", // Default direction is row
    justifyContent: "space-evenly",
    alignItems: "flex-start",

    background:
      "linear-gradient(0deg, rgba(70,103,105,1) 0%,   rgba(9,13,32,1)30%)",

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

    alignItems: "center",
    textAlign: "center",
    mt: "6%",
    ml: "0px",
    width: "100%",
  };
  const LinkStyle = {
    whiteSpace: "nowrap", // Ensures that content doesn't wrap to the next line
    marginBottom: "20px",
  };

  return (
    <>
      <Grid container spacing={3} sx={gridContainerStyle}>
        <Grid item xs={12} sm={6} md={4} lg={15} sx={{ ...gridItemStyle }}>
          <div className="contentText4">
            <Typography variant="h3" color={"white"}>
              Real-time, continuous optimization
              <Typography variant="h3" color={"white"}>
                {" "}
                adaptable to changing demands
              </Typography>
            </Typography>
          </div>
        </Grid>{" "}
        <Grid item xs={12} sm={6} md={4} lg={12} sx={{ ...gridItemStyle }}>
          <Stack direction={"row"} spacing={0}>
            <Box
              sx={{
                height: "30vh",
                width: "20vw",
                borderBottom: "0.1px solid grey",
                borderRight: "0.1px solid grey",
                textAlign: "left",
                justifyContent: "center",
              }}
            >
              <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAlACEDASIAAhEBAxEB/8QAGgABAQADAQEAAAAAAAAAAAAAAAQBAgMFBv/EACkQAAIDAAEDAgQHAAAAAAAAAAECAAMEERIhMQVBEyJRYSNCUpGhwdH/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQQC/8QAHREAAgMAAgMAAAAAAAAAAAAAAAECERIDQRMhMf/aAAwDAQACEQMRAD8A+RiWYMiai/WzALx4+8zty586kJY/xP0t7j9po8cs66OSKJ6OTHm0Vj8Ry/HLAe38SfdnXNcEQkgrz3h8clHXQJoiJwCnJqGdLhwSXHAI9j3/ANldLL6jSa7QRag7OBOfpdS2poVgO4ABI8eZ01M2OgU50ZR+azj+5qhagm/gMarhiQZ6AQfLN9ZJt0LpuDqpUBeO8uqB35wL0Ide6vx2Mm9VVV0r0gD5B4H3MnIm42n6BFERMwOlOi2gk1P08+e3M3t133J0WWcr9OAIiXUqqyGU3aK0CJZwo8DgGcrbXufrsbqbjiIhyk1TZTSIiQH/2Q=="></img>

              <Typography variant="h6" color={"white"} fontWeight={700} mt={5}>
                Autonomous optimization
              </Typography>
              <Typography
                variant="body2"
                color={"grey"}
                fontWeight={700}
                mt={2}
              >
                Continuously optimize resources based on application behavior
                and traffic patterns
              </Typography>
            </Box>
            <Box
              sx={{
                height: "30vh",
                width: "20vw",
                borderBottom: "0.1px solid grey",
                borderRight: "0.1px solid grey",
                textAlign: "left",
                justifyContent: "center",
              }}
            >
              <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAlACEDASIAAhEBAxEB/8QAGgABAQADAQEAAAAAAAAAAAAAAAQBAgMFBv/EACkQAAIDAAEDAgQHAAAAAAAAAAECAAMEERIhMQVBEyJRYSNCUpGhwdH/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQQC/8QAHREAAgMAAgMAAAAAAAAAAAAAAAECERIDQRMhMf/aAAwDAQACEQMRAD8A+RiWYMiai/WzALx4+8zty586kJY/xP0t7j9po8cs66OSKJ6OTHm0Vj8Ry/HLAe38SfdnXNcEQkgrz3h8clHXQJoiJwCnJqGdLhwSXHAI9j3/ANldLL6jSa7QRag7OBOfpdS2poVgO4ABI8eZ01M2OgU50ZR+azj+5qhagm/gMarhiQZ6AQfLN9ZJt0LpuDqpUBeO8uqB35wL0Ide6vx2Mm9VVV0r0gD5B4H3MnIm42n6BFERMwOlOi2gk1P08+e3M3t133J0WWcr9OAIiXUqqyGU3aK0CJZwo8DgGcrbXufrsbqbjiIhyk1TZTSIiQH/2Q=="></img>
              <Typography variant="h6" color={"white"} fontWeight={700} mt={5}>
                Autonomous scaling
              </Typography>
              <Typography
                variant="body2"
                color={"grey"}
                fontWeight={700}
                mt={2}
              >
                Continuously optimize resources based on application behavior
                and traffic patterns
              </Typography>{" "}
            </Box>
            <Box
              sx={{
                height: "30vh",
                width: "20vw",
                borderBottom: "0.1px solid grey",
                textAlign: "left",
                justifyContent: "center",
              }}
            >
              {" "}
              <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAlACEDASIAAhEBAxEB/8QAGgABAQADAQEAAAAAAAAAAAAAAAQBAgMFBv/EACkQAAIDAAEDAgQHAAAAAAAAAAECAAMEERIhMQVBEyJRYSNCUpGhwdH/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQQC/8QAHREAAgMAAgMAAAAAAAAAAAAAAAECERIDQRMhMf/aAAwDAQACEQMRAD8A+RiWYMiai/WzALx4+8zty586kJY/xP0t7j9po8cs66OSKJ6OTHm0Vj8Ry/HLAe38SfdnXNcEQkgrz3h8clHXQJoiJwCnJqGdLhwSXHAI9j3/ANldLL6jSa7QRag7OBOfpdS2poVgO4ABI8eZ01M2OgU50ZR+azj+5qhagm/gMarhiQZ6AQfLN9ZJt0LpuDqpUBeO8uqB35wL0Ide6vx2Mm9VVV0r0gD5B4H3MnIm42n6BFERMwOlOi2gk1P08+e3M3t133J0WWcr9OAIiXUqqyGU3aK0CJZwo8DgGcrbXufrsbqbjiIhyk1TZTSIiQH/2Q=="></img>
              <Typography variant="h6" color={"white"} fontWeight={700} mt={5}>
                Autonomous concurrency
              </Typography>
              <Typography
                variant="body2"
                color={"grey"}
                fontWeight={700}
                mt={2}
              >
                The most cost-effective way to virtually eliminate serverless
                cold starts
              </Typography>
            </Box>
          </Stack>
          <Stack direction={"row"}>
            <Box
              sx={{
                height: "30vh",
                width: "20vw",
                textAlign: "left",
                borderRight: "0.1px solid grey",
                justifyContent: "center",
              }}
            >
              {" "}
              <img
                style={{
                  width: "30px",
                  marginTop: "4%",
                }}
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQIkQL90JAma_XZ4QOHwiTph1vLaKgZpIwT5xTe-OnntimQ4uax"
              ></img>
              <Typography variant="h6" color={"white"} fontWeight={700} mt={5}>
                Autonomous remediation
              </Typography>
              <Typography
                variant="body2"
                color={"grey"}
                fontWeight={700}
                mt={2}
              >
                Prevent, detect and remediate availability issues autonomously
                in real-time and cut FCIs
              </Typography>
            </Box>
            <Box
              sx={{
                height: "30vh",
                width: "20vw",
                textAlign: "left",
                borderRight: "0.1px solid grey",
                justifyContent: "space-between",
                justifyContent: "center",
              }}
            >
              <img
                style={{
                  width: "20px",
                  marginTop: "20px",
                }}
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSnZpfgZF5zhzkVd5MTrgVmWBJxX0IiAqMl0vhrOAsXrAnJK0u_"
              ></img>
              <Typography variant="h6" color={"white"} fontWeight={700} mt={5}>
                Smart SLOs
              </Typography>
              <Typography
                variant="body2"
                color={"grey"}
                fontWeight={700}
                mt={2}
              >
                Define performance goals to have Sedai autonomously optimize
                resources to meet SLOs
              </Typography>{" "}
            </Box>
            <Box
              sx={{
                height: "30vh",
                width: "20vw",
                textAlign: "left",
                justifyContent: "center",
              }}
            >
              {" "}
              <img
                style={{
                  width: "30px",
                }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFRf_qsBxZjqlejlYPEH9kICNBotTQnblgYS71K7Vn5_Bep9-J"
              ></img>
              <Typography variant="h6" color={"white"} fontWeight={700} mt={5}>
                Release intelligence
              </Typography>
              <Typography
                variant="body2"
                color={"grey"}
                fontWeight={700}
                mt={2}
              >
                Detect, monitor and score performance and deviations in new
                application releases
              </Typography>
            </Box>
          </Stack>
        </Grid>
      
      </Grid>
    </>
  );
};

export default Content3;