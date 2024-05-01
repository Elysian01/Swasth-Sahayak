import "../css/Navbar.css";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../login/authSlice";
import { postRequest } from "../Api/api";

function Navbar() {
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  async  function handleLogout() {
    dispatch(logout());
    const headers = { Authorization: `Bearer ${token}` };
        const response = await postRequest(
          `/auth/logout`,
          token,
          headers
        );
    navigate("/", { replace: true });
  }
  const [show, setShow] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 20) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);
  useEffect(() => {
    const handleToggleNav = () => {
      const navLinks = document.querySelector(".nav-links");
      if (navLinks) {
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
      }
    };

    const handleScroll = () => {
      const scroll = window.scrollY;
      const width = window.innerWidth;
      const nav = document.querySelector("#nav");

      if (nav) {
        if (scroll >= 70 && width >= 995) {
          nav.classList.add("new-nav");
        } else if (scroll === 0 && width >= 995) {
          nav.classList.remove("new-nav");
        } else if (scroll >= 70 && width < 995) {
          nav.classList.add("new-nav");
        } else if (scroll === 0 && width < 995) {
          nav.classList.remove("new-nav");
        }
      }
    };

    const hamburger = document.querySelector(".hamburger");
    if (hamburger) {
      hamburger.addEventListener("click", handleToggleNav);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      if (hamburger) {
        hamburger.removeEventListener("click", handleToggleNav);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav id={`nav${!show ? "" : "-hidden"}`}>
      <div className="nav-logo">
        <Link to="/admin-dashboard">
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
              <Link className="nav-item" to="/admin-dashboard">
                Home
              </Link>
            </>
          )}
        </li>
        <li>
          {token && (
            <>
              <Link className="nav-item" to="/doctor-dashboard">
                Doctor
              </Link>
            </>
          )}
        </li>
        <li>
          {token && (
            <>
              <Link className="nav-item" to="/field-worker-dashboard">
                Field Worker
              </Link>
            </>
          )}
        </li>

        <li>
          {token && (
            <div className="nav-item" onClick={handleLogout}>
              Logout
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
