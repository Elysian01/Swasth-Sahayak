function StatisticCard(props) {
	return (
		<div class="col1">
			<div class="statistics">
				<div class="appointments">
					<div id="title">Visits for Today</div>
					<div class="font-64">{props.countData}</div>
				</div>
				<div class="patient-details">
					<div class="white-bg">
						<label>New Patient</label>
						<label>16</label>
					</div>
					<div class="white-bg">
						<label>Old Patient</label>
						<label>{props.countData}</label>
					</div>
				</div>
			</div>
			<img src={require('../../static/imgs/login-bg.png')} alt="" />
		</div>
	);
}

export default StatisticCard;
