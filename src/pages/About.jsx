import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="mb-4">This is the about page of your app.</p>
      <Link to="/" className="text-blue-500 underline">
        Go back Home
      </Link>
    </div>
  );
}
