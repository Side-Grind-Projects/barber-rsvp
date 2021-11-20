import React from "react";
import "./homePage.scss";
import { Header, About, OurServices, Barbers } from "../../components";

const HomePage = () => {
  return (
    <div>
      <Header />
      <About />
      <OurServices />
      <Barbers />
    </div>
  );
};

export default HomePage;
