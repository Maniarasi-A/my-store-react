import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import Cart from "./components/Cart";

export default function App() {
  return (
    <Router>
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div style={{ maxWidth: 1142 }}>
          <div className="App">
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/cart" element={<Cart />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
