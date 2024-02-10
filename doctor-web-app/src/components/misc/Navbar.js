// import "../css/navbar.css";
// import { useEffect } from "react";

// function Navbar() {

// 	return (
// 		<nav id="nav">
// 			<div className="nav-logo">
// 				<div className="nav-heading">
// 					<span href="#">
// 						<img
// 							id="logo"
// 							src={require(`../../static/logo.png`)}
// 							alt=""
// 						/>
// 						Swasth Sahayak
// 					</span>
// 				</div>

// 				<div className="hamburger">
// 					<a href="#">
// 						<i className="fas fa-bars "></i>
// 					</a>
// 				</div>
// 			</div>

// 			<ul className="nav-links">
// 				<li>
// 					<a className="nav-item" href="/">
// 						Home
// 					</a>
// 				</li>
// 				<li>
// 					<a className="nav-item" href="/">
// 						Search Patient
// 					</a>
// 				</li>
// 				<li>
// 					<a className="nav-item" href="/">
// 						Chat with Doctor
// 					</a>
// 				</li>
// 				<li>
// 					<a className="nav-item" href="/">
// 						Profile
// 					</a>
// 				</li>
// 			</ul>
// 		</nav>
// 	);
// }

// export default Navbar;

import React, { useState, useEffect } from "react";
import "../css/navbar.css";

function Navbar() {
	const [showNavLinks, setShowNavLinks] = useState(false);
	const [newNav, setNewNav] = useState(false);

	const handleScroll = () => {
		const scroll = window.scrollY;
		const width = window.innerWidth;

		if (scroll > 10 && width > 995) {
			setNewNav(true);
		} else if (scroll === 0 && width > 995) {
			setNewNav(false);
		}

		if (scroll >= 70 && width < 995) {
			setNewNav(true);
		} else if (scroll === 0 && width < 995) {
			setNewNav(false);
		}
	};

	const handleToggle = () => {
		setShowNavLinks(!showNavLinks);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav className={`nav ${newNav ? "new-nav" : ""}`}>
			<div className="nav-logo">
				<div className="nav-heading">
					<span href="#">
						<img
							id="logo"
							src={require(`../../static/logo.png`)}
							alt=""
						/>
						Swasth Sahayak
					</span>
				</div>

				<div className="hamburger" onClick={handleToggle}>
					<i className="fas fa-bars"></i>
				</div>
			</div>

			<ul
				className="nav-links"
				style={{ display: showNavLinks ? "block" : "none" }}
			>
				<li>
					<a className="nav-item" href="/">
						Home
					</a>
				</li>
				<li>
					<a className="nav-item" href="/">
						Search Patient
					</a>
				</li>
				<li>
					<a className="nav-item" href="/">
						Chat with Doctor
					</a>
				</li>
				<li>
					<a className="nav-item" href="/">
						Profile
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
