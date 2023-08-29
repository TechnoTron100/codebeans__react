import React from "react";

function Hero() {
  return (
    <section className="container">
      <div className="hero">
        <h2 className="hero--header">
          Innovative Solutions
          <br />
          <span className="hero--header__secondary">One Bean at a Time</span>
        </h2>
        <img
          className="hero--image"
          src="media/icons/undraw_online_stats_0g94.svg"
          alt="Hero Images"
        />
        <p className="hero--text">
          the journey of a thousand miles starts with <br />a hitchhike to the
          galaxy, leap of faith, and
          <span className="hero--text__em">trusting our brand</span>
        </p>
        <a href="#contact" className="hero--btn">
          Get in Touch
        </a>
      </div>
    </section>
  );
}

export default Hero;
