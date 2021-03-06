import * as React from "react";
import AegleProcess from "../components/Home/AegleProcess";
import Hero from "../components/Home/Hero";
import Nutshell from "../components/Home/Nutshell";
import Footer from "../components/Layout/footer";
import Navbar from "../components/Layout/navbar";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

// data

// markup
const IndexPage = () => {
  return (
    <div className="main-container">
      <div className="home-top">
        <Navbar />
        <Hero />
      </div>
      <Nutshell />
      <div className="home-bottom">
        <AegleProcess />
      </div>

      <Footer />
    </div>
  );
};

export default IndexPage;
