import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainContainer>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </MainContainer>
    </>
  );
}
export default MyApp;
