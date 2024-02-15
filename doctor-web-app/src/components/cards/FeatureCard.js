import { Link } from "react-router-dom";

function FeatureCard(props) {
	return (
		<div class={props.cardClass}>
			<img src={require(`../../static/imgs/${props.image}`)} alt="" />
			<div class="contents">
				<h1>{props.title}</h1>
				<Link to={props.link}>
					<button class="white-btn">{props.btnText}</button>
				</Link>
			</div>
		</div>
	);
}

export default FeatureCard;
