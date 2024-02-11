import React from "react";
import "../css/short-listings.css";
import ShortListingsCard from "../cards/ShortListingsCard";

function ShortListings(props) {
	return (
		<div class={props.listingClass}>
			<h2>{props.title}</h2>
			<ul class="cards">
				<ShortListingsCard
					initials="AB"
					name="Abhishek Gupta"
					score="23"
				/>
				<ShortListingsCard
					initials="AB"
					name="Abhishek Gupta"
					score="23"
				/>
				<ShortListingsCard
					initials="AB"
					name="Abhishek Gupta"
					score="23"
				/>
			</ul>
			<button className="dark-primary-btn">View More</button>
		</div>
	);
}

export default ShortListings;
