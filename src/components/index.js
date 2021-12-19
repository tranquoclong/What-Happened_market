import React from "react";
import Header from "./header";
import Banner from "./banner";
import Product from "./product";
import BrandStory from "./brand/BrandStory";
import BrandIssue from "./brand/BrandIssue";
import WhatHappened from "./whatHappened";
import Footer from "./footer";
const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <Product />
      <BrandStory />
      <BrandIssue />
      <WhatHappened />
      <Footer />
    </>
  );
};

export default App;
