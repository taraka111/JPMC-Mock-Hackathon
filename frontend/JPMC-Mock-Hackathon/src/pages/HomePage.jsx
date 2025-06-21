import React from "react";
import "../styles/homepage.css"; 

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Main Hero Section */}
      <div className="home-hero">
        <h1>Welcome to Poshan 2.0</h1>
        <p>Revolutionizing nutrition and well‑being for a healthier future!</p>
      </div>

      {/* Mission Section */}
      <section className="mission">
        <h2>Combating Malnutrition</h2>
        <p>
          At Poshan 2.0, we are dedicated to eradicating malnutrition by
          building resilience in children and mothers. Our initiative aims to
          educate communities, foster healthier habits, and provide life-changing
          nutrition interventions for a brighter future.
        </p>
      </section>

      {/* About Us Section */}
      <section className="about-us">
        <h2>About Us</h2>
        <p>
          Poshan 2.0 is a passionate team of nutrition experts, technologists,
          and volunteers working towards making nutrition accessible and
          actionable. We envision a world where every child has access to the
          nutrition they need to thrive and flourish.
        </p>
      </section>

      {/* Contact Us Section */}
      <section className="contact-us">
        <h2>Contact Us</h2>
        <p>Email: <a href="mailto:info@poshan2.org">info@poshan2.org</a></p>
        <p>Phone: +91 98765 43210</p>
        <p>Location: New Delhi, India</p>
      </section>
    </div>
  );
};

export default HomePage;

