function StatisticCard(props) {
	return (
		<div class="col1">
			<div class="statistics">
				<div class="appointments">
					<div id="title">Visits for Today</div>
					<div class="font-64">26</div>
				</div>
				<div class="patient-details">
					<div class="white-bg">
						<label>New Patient</label>
						<label>16</label>
					</div>
					<div class="white-bg">
						<label>Old Patient</label>
						<label>10</label>
					</div>
				</div>
			</div>
			<img src={require(`../../static/imgs/${props.image}`)} alt="" />
		</div>
	);
}

export default StatisticCard;
