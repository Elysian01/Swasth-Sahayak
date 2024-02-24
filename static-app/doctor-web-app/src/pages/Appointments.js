import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./css/common.css";
import Navbar from "../components/misc/Navbar";

function Appointments() {
	return (
		<div>
			<Navbar />
			<h1>Appointments</h1>
		</div>
	);
}

export default Appointments;
