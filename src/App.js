import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Features from "./Components/Features/Features";
import Content from "./Components/Content/Part";
import NewArrivals from "./Components/NewArrivals/NewArrival";
import Shop from "./Shop/Shop";
import Road from "./Pages/Road";
import Gravel from "./Pages/Gravel";
import Electric from "./Pages/Electric";
import Kids from "./Pages/Kids";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
              <Content />
              <NewArrivals />
              <Footer />
            </>
          }
        />
        <Route path="/road" element={<Road />} />
        <Route path="/gravel" element={<Gravel />} />
        <Route path="/electric" element={<Electric />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
}

export default App;
