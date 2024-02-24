function ShortListingsCard(props) {
	return (
		<li class="card">
			<div class="inner">
				<div class="avatar-holder">
					<span class="named-avatar">{props.initials}</span>
				</div>
				<div class="info-holder">
					<p class="name">{props.name}</p>
					<p class="score">Score: {props.score}/30</p>
				</div>
			</div>
			<div class="dark-primary-small-btn">View</div>
		</li>
	);
}

export default ShortListingsCard;
