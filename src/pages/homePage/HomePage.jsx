import React from "react";
import "./homePage.scss";
import { Navbar, Header, About, OurServices, Barbers, Account } from "../../components";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <OurServices />
      <Barbers />
      <Account />
    </div>
  );
};

export default HomePage;
