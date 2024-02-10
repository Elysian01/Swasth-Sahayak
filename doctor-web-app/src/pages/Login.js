import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./css/common.css";
import "./css/login.css";
import Navbar from "../components/misc/Navbar";
import LoginBG from "../components/misc/LoginBG";
import InputField from "../components/input_fields/InputField";

function Login() {
	const buttons = document.querySelectorAll(".toggle-button");
	const inputs = document.querySelectorAll("input");

	inputs.forEach((input) => {
		input.autocomplete = "off";
		input.spellcheck = false;
		input.required = true;
	});

	document.querySelectorAll("button[type='submit']").forEach((submit) => {
		submit.addEventListener("click", () => {
			inputs.forEach((input) => (input.value = ""));
		});
	});

	document.querySelectorAll(".fa-eye").forEach((eye) => {
		eye.addEventListener("click", () => {
			const passwordInput = eye.previousElementSibling;

			if (passwordInput.type === "password") {
				passwordInput.type = "text";
				eye.classList.remove("fa-eye");
				eye.classList.add("fa-eye-slash");
			} else {
				passwordInput.type = "password";
				eye.classList.remove("fa-eye-slash");
				eye.classList.add("fa-eye");
			}
		});
	});

	return (
		<div>
			<Navbar />

			<br />
			<br />
			<br />
			<br />

			<div className="login">
				<LoginBG />
				<div className="content">
					<div className="greetings">
						<h1 className="greetings-1">Welcome to</h1>
						<h1 className="greetings-2">Swasth Sahayak</h1>
					</div>
					<h2 className="login-heading">Login</h2>

					<InputField type="email" />

					<InputField type="password" />

					<div className="login-subtext-right">
						<Link
							to="/forgot-password"
							className="forgot-password"
						>
							Forgot Password?
						</Link>
					</div>

					<div className="login-submit">
						<button className="login-btn">Login</button>
					</div>
				</div>
			</div>
			<br />
			<br />
			<br />
		</div>
	);
}

export default Login;
