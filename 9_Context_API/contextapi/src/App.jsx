import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";

//Pages
import Home from "./pages/Home";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Page2 />} />
          <Route path="/contact" element={<Page3 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
