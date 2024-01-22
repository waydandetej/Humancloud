import React from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";

const images = [
  "/images/Card.png",
  "/images/Card1.png",
  "/images/Card2.png",
  "/images/Card3.png",
  "/images/Card4.png",
  "/images/Card5.png",
];

const App = () => {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          alignSelf: "stretch",
        }}
      >
        <div>
          <Typography
            variant="h4"
            align="center"
            style={{
              color: "#000",
              fontFamily: "Roboto",
              fontSize: 32,
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
              margin: 0,
            }}
          >
            Browse By Category
          </Typography>
        </div>
      </div>

      <div>
        <Typography
          variant="body1"
          style={{
            color: "#666",
            fontFamily: "Roboto",
            fontSize: 20,
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "24px",
            margin: "16px 0",
          }}
        >
          Lorem Ipsum sit dolor amet.
        </Typography>
      </div>
      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
            <Paper>
              <img
                src={image}
                alt={`Image ${index + 1}`}
                style={{ width: "100%" }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default App;
