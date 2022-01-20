import { ThemeProvider } from "@mui/styles";
import { AppProps } from "next/app";
import "../styles/globals.css";
import { styleTheme } from "./theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={styleTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
