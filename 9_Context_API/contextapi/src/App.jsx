import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import NavBar from "./components/Navbar";

function App() {

  return (
    <>
    <h1>ContextAPI</h1>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
