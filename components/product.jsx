import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ProductHeroLayout } from "./ProductHeroLayout";
import Image from "next/image";
// import Image1 from "../images/rotate/nature.png"; // Import using relative path
// import Image2 from "../images/rotate/duck.png"; // Import using relative path
// import Image3 from "../images/rotate/messi.png"; // Import using relative path

// import { useEffect, useState } from "react";

// const Images = [Image1, Image2, Image3];
// const imagePrompts = [
//   "“A beautiful oil painting depicting serene wilderness”",
//   "“A duck walking in the space while talking on the phone”",
//   "“Graffiti of Lionel Messi with World Cup”",
// ];
// const NUM_IMAGES = Images.length;

export default function Product() {


    return (
        <ProductHeroLayout
            sxBackground={{
                // backgroundImage: `url(${Image1.src})`,
                backgroundColor: "#7fc7d9", // Average color of the background image.
                backgroundPosition: "center",
                width: "100%",
            }}
        >
            {/* Increase the network loading priority of the background image. */}
            {/* <Image
                src={Image1}
                alt="Picture of the author"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
            /> */}
            {/* <img style={{ display: "none" }} src={Image1} alt="increase priority" /> */}
            <Typography color="inherit" align="center" variant="h2" marked="center">
                Generate Images using AI and upgrade your workflow
            </Typography>
            <Typography
                color="inherit"
                align="center"
                variant="h5"
                sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
            >
                {/* {imagePrompt} */}
            </Typography>
            <Button
                color="secondary"
                variant="contained"
                size="large"
                component="a"
                href="/premium-themes/onepirate/sign-up/"
                sx={{ minWidth: 200 }}
            >
                Try for free
            </Button>
            <Typography variant="h6" color="inherit" sx={{ mt: 2 }}>
                Discover the experience
            </Typography>
        </ProductHeroLayout>
    );
}
