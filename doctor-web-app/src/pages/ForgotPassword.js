import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


import "./css/common.css";
import "./css/login.css";
import Navbar from "../components/misc/Navbar";
import LoginBG from "../components/misc/LoginBG";
import InputField from "../components/input_fields/InputField";

function ForgotPassword() {
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [emailGivenByUser, setEmailGivenByUser] = useState(false);

	const [otp, setOtp] = useState("");
	const [otpGivenByUser, setOtpGivenByUser] = useState(false);

	const [newPassword, setNewPassword] = useState("");
	const [reEnterNewPassword, setReEnterNewPassword] = useState("");

	const emailChangeHandler = (e) => {
		setEmail(e.target.value);
		// console.log(email);
	};

	const otpChangeHandler = (e) => {
		setOtp(e.target.value);
	};

	function sendOTP(e) {
		setEmailGivenByUser(true);
	}

	function verifyOTP(e) {
		setOtpGivenByUser(true);
	}

	const newPasswordChangeHandler = (e) => {
		setNewPassword(e.target.value);
	};

	const reEnterNewPasswordChangeHandler = (e) => {
		setReEnterNewPassword(e.target.value);
	};

	function resetPassword(e) {
		if (newPassword === "" || reEnterNewPassword === "") {
			alert("Please Enter Password");
		} else if (newPassword !== reEnterNewPassword) {
			alert(
				"Password and Confirm Password Not Matching, please enter correct"
			);
			setNewPassword("");
			setReEnterNewPassword("");
		} else {
			alert("Password resetted successfully");
			navigate("/");
		}
	}

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

					<h2 className="login-heading">Forgot Password</h2>

					<div className="subtext">
						<h3>Please Enter Below Details</h3>
					</div>

					{!emailGivenByUser && (
						<div className="inner-content">
							<InputField
								id="Email"
								type="email"
								placeholder="Enter Username"
								onChange={emailChangeHandler}
								value={email}
							/>
							<div className="login-submit">
								<button
									className="login-btn"
									onClick={sendOTP}
								>
									Get OTP
								</button>
							</div>
						</div>
					)}

					{emailGivenByUser && !otpGivenByUser && (
						<div className="inner-content">
							<InputField
								id="otp"
								type="number"
								placeholder="Enter OTP"
								onChange={otpChangeHandler}
								value={otp}
							/>
							<div className="login-submit">
								<button
									className="login-btn"
									onClick={verifyOTP}
								>
									Verify OTP
								</button>
							</div>
						</div>
					)}

					{emailGivenByUser && otpGivenByUser && (
						<div className="inner-content">
							<InputField
								id="password1"
								type="password"
								placeholder="Enter Password"
								onChange={newPasswordChangeHandler}
								value={newPassword}
							/>
							<InputField
								id="password2"
								type="password"
								placeholder="Confirm Password"
								onChange={
									reEnterNewPasswordChangeHandler
								}
								value={reEnterNewPassword}
							/>
							<div className="login-submit">
								<button
									className="login-btn"
									onClick={resetPassword}
								>
									Reset this as New Password
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
			<br />
			<br />
			<br />
		</div>
	);
}

export default ForgotPassword;
