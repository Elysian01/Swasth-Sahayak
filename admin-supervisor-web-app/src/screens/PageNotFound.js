import React from "react";
import Navbar from "../components/headers/Navbar";
import PageHeading from "../components/headers/PageHeading";

function PageNotFound() {
	return (
		<div>
			<Navbar />
			<PageHeading title="Page Not Found" />
		</div>
	);
}

export default PageNotFound;
