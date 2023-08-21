import React from "react";
import Navbar from "./NavBar";
import Jumbo from "./Jumbo";
import Footer from "./Footer";
import CardSection from "./CardSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Jumbo />
      <CardSection />
      <Footer />
    </div>
  );
};

export default Home;
