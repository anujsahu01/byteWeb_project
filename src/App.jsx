import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "../src/pages/SignIn";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home layout wraps all pages */}
        <Route path="/" element={<Home />}>
          <Route index element={<div>Welcome to the Home Page!</div>} />
          <Route path="about" element={<About />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
