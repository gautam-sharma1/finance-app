import { createTheme, ThemeProvider, styled } from "@mui/material/styles";


export const themeOptions = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#fafafa",
    },
    secondary: {
      main: "#303030",
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={themeOptions}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
