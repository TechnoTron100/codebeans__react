import React, { useState } from "react";

function Navigation() {
  const [isNavClicked, setNavIsClicked] = useState(false);
  const [isMenuClicked, setMenuClicked] = useState(false);

  const navBackground = {
    transform: `${isNavClicked ? "scale(80)" : "scale(0)"}`,
    transform: `${isMenuClicked == false ? "scale(0)" : "scale(80)"}`,
  };

  const navNav = {
    opacity: `${isNavClicked ? "1" : "0"}`,
    opacity: `${isMenuClicked == false ? "0" : "1"}`,
    width: `${isNavClicked ? 110 + "%" : "0"}`,
    width: `${isMenuClicked == false ? "0" : 110 + "%"}`,
  };

  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
        onChange={() => setNavIsClicked(true)}
      />
      <label
        htmlFor="navi-toggle"
        className="navigation__button"
        onClick={() => setNavIsClicked(true)}
      >
        <span
          className="navigation__icon"
          onClick={() => setMenuClicked(!isMenuClicked)}
        >
          {!isMenuClicked ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
              onClick={() => setMenuClicked(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </span>
      </label>

      <nav className="navigation__nav" style={navNav}>
        <ul className="navigation__list">
          <li
            className="navigation__item"
            onClick={() => {
              setNavIsClicked(!isNavClicked);
              setMenuClicked(false);
            }}
          >
            <a href="#about" className="navigation__link">
              About Us
            </a>
          </li>
          <li
            className="navigation__item"
            onClick={() => {
              setNavIsClicked(!isNavClicked);
              setMenuClicked(false);
            }}
          >
            <a href="#services" className="navigation__link">
              Services
            </a>
          </li>
          <li
            className="navigation__item"
            onClick={() => {
              setNavIsClicked(!isNavClicked);
              setMenuClicked(false);
            }}
          >
            <a href="#courses" className="navigation__link">
              Courses
            </a>
          </li>
          <li
            className="navigation__item"
            onClick={() => {
              setNavIsClicked(!isNavClicked);
              setMenuClicked(false);
            }}
          >
            <a href="#projects" className="navigation__link">
              Projects
            </a>
          </li>
          <li
            className="navigation__item"
            onClick={() => {
              setNavIsClicked(!isNavClicked);
              setMenuClicked(false);
            }}
          >
            <a href="#team" className="navigation__link">
              Team
            </a>
          </li>
          <li
            className="navigation__item"
            onClick={() => {
              setNavIsClicked(!isNavClicked);
              setMenuClicked(false);
            }}
          >
            <a href="#contact" className="navigation__link">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>

      <div className="navigation__background" style={navBackground}>
        &nbsp;
      </div>
    </div>
  );
}

export default Navigation;
