import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const footerMenuItems = [
    {
        text: "Home",
        url: "#",
    },
    {
        text: "About",
        url: "#",
    },
    {
        text: "Features",
        url: "#",
    },
    {
        text: "Pricing",
        url: "#",
    },
    {
        text: "Contact Us",
        url: "#",
    },
];

function Copyright() {
    return (
        <React.Fragment>
            {"© "}
            <Link color="inherit" href="https://mui.com/">
                www.diffuse.com
            </Link>{" "}
            {new Date().getFullYear()}
        </React.Fragment>
    );
}

function HoverableLink({ text, url }) {
    return (
        <React.Fragment>
            <Grid item>
                <Link href={url} underline="hover" color="secondary">
                    {text}
                </Link>
            </Grid>
        </React.Fragment>
    );
}

const iconStyle = {
    width: 48,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "warning.main",
    mr: 1,
    "&:hover": {
        bgcolor: "warning.dark",
    },
};

const LANGUAGES = [
    {
        code: "en-US",
        name: "English",
    },
];

export default function AppFooter() {
    return (
        <Typography
            component="footer"
            color="primary"
            sx={{ display: "flex", bgcolor: "primary.main", color: "secondary", paddingTop: "0px", marginTop: "0px" }}

        >
            <Container sx={{ my: 5, display: "flex" }}>
                <Grid color="secondary" container justifyContent="center" spacing={2}>
                    {footerMenuItems.map((menuItem) => {
                        return (
                            <HoverableLink
                                key={menuItem.text}
                                text={menuItem.text}
                                url={menuItem.url}
                            />
                        );
                    })}

                    <Grid
                        container
                        justifyContent="center"
                        spacing={2}
                        sx={{ paddingTop: "5%" }}
                    >
                        <Grid item>
                            <Copyright />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Typography>
    );
}
