// HeroSection.js
import React from 'react';
import './HeroSection.css';
import Music from './music.jpg';
const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Welcome to Expense Tracker</h1>
        <p>Keep track of your expenses effortlessly and efficiently.</p>
      </div>
      <div className="hero-image">
        <img src={Music} alt="Hero" />
      </div>
    </section>
  );
};

export default HeroSection;
