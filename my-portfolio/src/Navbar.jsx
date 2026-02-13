import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow">
      <h1 className="text-2xl font-bold">Harry</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-500">
          Home
        </Link>
        <Link to="/portfolio" className="hover:text-blue-500">
          Portfolio
        </Link>
        <Link to="/about" className="hover:text-blue-500">
          About
        </Link>
        <Link to="/contact" className="hover:text-blue-500">
          Contact
        </Link>
      </div>
    </nav>
  );
}
