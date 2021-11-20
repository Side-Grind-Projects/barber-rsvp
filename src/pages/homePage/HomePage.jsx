import React from "react";
import "./homePage.scss";
import { Header, About, OurServices, Barbers } from "../../components";

const HomePage = () => {
  return (
    <>
      <Header />
      <About />
      <OurServices />
      <Barbers />
    </>
  );
};

export default HomePage;
