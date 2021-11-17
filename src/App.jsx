import React from "react";
import HomePage from "./pages/homePage/HomePage";
import { AuthModal } from "./components";

// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from 'react-router-dom';

const App = () => {
  return (
    <>
      <HomePage />
      <AuthModal />
    </>
  );
};

export default App;
