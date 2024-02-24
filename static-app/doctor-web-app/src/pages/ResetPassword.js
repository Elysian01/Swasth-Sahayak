import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import "./css/common.css";
import "./css/login.css";
import Navbar from "../components/misc/Navbar";
import LoginBG from "../components/misc/LoginBG";
import InputField from "../components/input_fields/InputField";

function ResetPassword() {
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
					<h2 className="login-heading">Reset Password</h2>
					<div className="subtext">
						<h3>Please Enter Below Details</h3>
					</div>

					<InputField
						type="password"
						placeholder="Old Password"
					/>
					<InputField
						type="password"
						placeholder="New Password"
					/>

					<InputField
						type="password"
						placeholder="Confirm Password"
					/>

					<div className="login-submit">
						<button className="login-btn">Reset</button>
					</div>
				</div>
			</div>
			<br />
			<br />
			<br />
		</div>
	);
}

export default ResetPassword;
