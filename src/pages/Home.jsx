




import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-purple-100 flex flex-col">

      {/* Header */}
      <Header />

      {/* Content */}
      <Outlet />

      {/* Footer */}
      <Footer />
    </div>
  );
}
