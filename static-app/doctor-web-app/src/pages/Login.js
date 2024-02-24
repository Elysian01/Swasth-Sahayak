import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./css/common.css";
import "./css/login.css";
import Navbar from "../components/misc/Navbar";
import LoginBG from "../components/misc/LoginBG";
import InputField from "../components/input_fields/InputField";

import { useSelector, useDispatch } from "react-redux";

// import { history } from "../helpers";
// import { authActions } from "../store/store";

function Login() {
	// const dispatch = useDispatch();
	// const authUser = useSelector((x) => x.auth.user);
	// const authError = useSelector((x) => x.auth.error);

	// useEffect(() => {
	// 	// redirect to home if already logged in
	// 	if (authUser) history.navigate("/");

	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, []);
	// function onSubmit({ username, password }) {
	// 	return dispatch(authActions.login({ username, password }));
	// }
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
					<div className="subtext">
						<h3>Please Enter Below Details</h3>
					</div>

					<InputField
						type="email"
						placeholder="Employee Email"
					/>

					<InputField
						type="password"
						placeholder="Enter Password"
					/>

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
