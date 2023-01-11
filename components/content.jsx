import { Typography } from "@mui/material";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid"; // Grid version 1
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Div = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    display: "inline",
}));

export const Content = () => {
    return (
        <div>
            <Container>
                <Toolbar />
                <Typography
                    variant="h1"
                    component="h1"
                    color="secondary"
                    align="center"
                >
                    Generate Images on the Fly
                </Typography>
                <br></br>
                <Typography align="" variant="h6" sx={{ paddingBottom: "5%" }}>
                    Welcome to Diffuse! We specialize in generating AI-rendered images
                    based on categories. Our state-of-the-art technology allows users to
                    browse through thousands of images based on categories. Whether
                    you're a business looking to enhance your marketing materials, or an
                    individual seeking to bring your creative ideas to life, our platform
                    has you covered. With a user-friendly interface and lightning fast
                    rendering times, you'll be able to bring your vision to fruition in no
                    time. Thank you for choosing our company to bring your ideas to life.
                    We can't wait to see what you create!
                </Typography>
            </Container>
        </div>
    );
};
