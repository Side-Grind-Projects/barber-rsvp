import React from "react";
import "./homePage.scss";
import { Navbar, Header, About, OurServices, Barbers } from "../../components";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <OurServices />
      <Barbers />
    </div>
  );
};

export default HomePage;
