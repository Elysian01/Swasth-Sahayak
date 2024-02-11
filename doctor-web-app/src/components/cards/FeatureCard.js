function FeatureCard(props) {
	return (
		<div class={props.cardClass}>
			<img src={require(`../../static/imgs/${props.image}`)} alt="" />
			<div class="contents">
				<h1>{props.title}</h1>
				<button class="white-btn">{props.btnText}</button>
			</div>
		</div>
	);
}

export default FeatureCard;
