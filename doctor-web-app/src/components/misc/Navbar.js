import "../css/Navbar.css";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    const handleToggleNav = () => {
      const navLinks = document.querySelector(".nav-links");
      navLinks.style.transition = "height 0.3s"; // Adjust transition duration as needed

      if (navLinks.style.display === "block") {
        navLinks.style.height = "0";
        setTimeout(() => {
          navLinks.style.display = "none";
        }, 50); // Match transition duration
      } else {
        navLinks.style.display = "block";
        setTimeout(() => {
          navLinks.style.height = "auto";
        }, 50); // Allow time for display to change before setting height to auto
      }
    };

    const handleScroll = () => {
      const scroll = window.scrollY;
      const width = window.innerWidth;
      const nav = document.querySelector("#nav");

      if (scroll >= 70 && width >= 995) {
        nav.classList.add("new-nav");
      } else if (scroll === 0 && width >= 995) {
        nav.classList.remove("new-nav");
      } else if (scroll >= 70 && width < 995) {
        nav.classList.add("new-nav");
      } else if (scroll === 0 && width < 995) {
        nav.classList.remove("new-nav");
      }
    };

    document
      .querySelector(".hamburger")
      .addEventListener("click", handleToggleNav);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document
        .querySelector(".hamburger")
        .removeEventListener("click", handleToggleNav);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav id="nav">
      <div className="nav-logo">
        <Link to="/doctor-dashboard">
          <div className="nav-heading">
            <span>
              <img id="logo" src={require(`../../static/logo.png`)} alt="" />
              Swasth Sahayak
            </span>
          </div>
        </Link>

        <div className="hamburger">
          <a href="#">
            <i className="fas fa-bars "></i>
          </a>
        </div>
      </div>

      <ul className="nav-links">
        <li>
          {token && (
            <>
              <Link className="nav-item" to="/doctor-dashboard">
                Home
              </Link>
            </>
          )}
        </li>
        <li>
          {token && (
            <>
              <Link className="nav-item" to="/search-patient">
                Search Patient
              </Link>
            </>
          )}
        </li>
        <li>
          {token && (
            <>
              <Link className="nav-item" to="/doctor-chat">
                Chat with Doctor
              </Link>
            </>
          )}
        </li>
        <li>
          {token && (
            <>
              <Link className="nav-item" to="/profile">
                Profile
              </Link>
            </>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
