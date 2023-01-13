import React from "react";
import Navbar from "./Navbar";

import Hero from "../components/Hero";
import Trendy from "./Trendy";
import Trending from "./Trending";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Trendy />
      <Trending />
      <Footer />
    </>
  );
};

export default Home;
