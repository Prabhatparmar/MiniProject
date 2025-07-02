import React, { useState } from 'react';
import './Home.css';

export const Home: React.FC = () => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div className="home-page">
      {/* Navbar */}
      <header className="hero-section">
        <nav className="navbar">
          <div className="logo">JTGmeals</div>
          <ul className="nav-links">
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="hero-content">
          <h1>Authentic Home food in India</h1>
          <p>Delivering delicious, home-cooked meals at your doorstep</p>
          <div className="search-bar">
            <input type="text" placeholder="Enter your location" />
            <button>Search</button>
          </div>
        </div>
      </header>

      {/* Home Kitchen Section */}
      <section className="home-kitchen">
        <h2>Home Kitchen</h2>
        <div className="grid-container">
          {[...Array(8)].map((_, i) => (
            <div className="food-card" key={i}>
              <img src="https://via.placeholder.com/200x140?text=food" alt="food" />
              <h4>Item Name</h4>
              <p>By: Cook Name</p>
              <p>₹ Price</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Items */}
      <section className="popular-items">
        <h2>Popular Items</h2>
        <div className="carousel">
          {[...Array(3)].map((_, i) => (
            <div className="food-card" key={i}>
              <img src="https://via.placeholder.com/200x140?text=popular" alt="popular" />
              <h4>Item Name</h4>
              <p>By: Cook</p>
              <p>₹ Price</p>
            </div>
          ))}
        </div>
      </section>

      {/* Promo Section */}
      <section className="promo-section">
        <h2>We are providing best home cooked food delivery service.</h2>
        <div className="promo-video">
          {!playVideo ? (
            <>
              <img
                src="https://via.placeholder.com/600x300.png?text=Home+Cooked+Food"
                alt="promo"
                onClick={() => setPlayVideo(true)}
              />
              <button className="play-button" onClick={() => setPlayVideo(true)}>▶</button>
            </>
          ) : (
            <video width="100%" controls autoPlay>
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h3>Do you have a question or need to place an order?</h3>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Submit</button>
        </form>
        <img className="delivery-img" src="https://via.placeholder.com/200?text=delivery" alt="delivery" />
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 JTGmeals</p>
        <div className="footer-links">
          <span>Home</span>
          <span>About</span>
          <span>Menu</span>
          <span>Contact</span>
        </div>
      </footer>
    </div>
  );
};
