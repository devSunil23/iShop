import React from "react";
import Header from "./components/header/Header";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Store from "./components/store/Store";
import Iphone from "./components/home/Iphone";
import Mackbook from "./components/home/Mackbook";
import Ipad from "./components/home/Ipad";
import Accesories from "./components/home/Accesories";
import Footer from "./components/footerPart/Footer";
import Registration from "./components/regsterlogin/Registration";
import Login from "./components/regsterlogin/Login";
import Cart from "./components/cart/Cart";
const App = () => {
  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/ipad" element={<Ipad />} />
          <Route path="/macbook" element={<Mackbook />} />
          <Route path="/accesories" element={<Accesories />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
