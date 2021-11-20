import React from "react";
import { HomePage, AccountPage, AppointmentPage } from "./pages";
import {
  About,
  AuthModal,
  Barbers,
  Header,
  Navbar,
  OurServices,
} from "./components";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<About />} />
        <Route path="/" element={<Barbers />} />
        <Route path="/" element={<Header />} />
        <Route path="/" element={<OurServices />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/appointment/:id" element={<AppointmentPage />} />
      </Routes>
      {/* <HomePage /> */}
      {/* <AuthModal /> */}
    </Router>
  );
};

export default App;
