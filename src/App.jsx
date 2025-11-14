import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "../src/pages/SignIn";
import SignUp from "../src/pages/SignUp";
import HomeContent from "./pages/HomeContent";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home layout wraps all pages */}
        <Route path="/" element={<Home />}>
          <Route index element={<HomeContent />} />  
          <Route path="about" element={<About />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="signUp" element={<SignUp />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
