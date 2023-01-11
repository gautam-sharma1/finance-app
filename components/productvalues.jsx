import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CropFreeIcon from "@mui/icons-material/CropFree";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        overflow: "hidden",
        bgcolor: "secondary.light",
        color: "white",
      }}
    >
      <Container sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}>
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <CropFreeIcon />
              <Typography variant="h6" sx={{ my: 5 }}>
                Own your images
              </Typography>
              <Typography variant="h5">
                {"Get exclusive rights to your images."}

                {"That means you own your images 100%."}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <CropFreeIcon />
              <Typography variant="h6" sx={{ my: 5 }}>
                Get unlimited
              </Typography>
              <Typography variant="h5">
                {
                  "Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… "
                }

                {"your Sundays will not be alike."}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <CropFreeIcon />
              <Typography variant="h6" sx={{ my: 5 }}>
                Affordable
              </Typography>
              <Typography variant="h5">
                {
                  "We try our best to make our services extremely competitive and affordable "
                }
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
