function InputField(props) {
	return (
		<div>
			{props.type === "email" && (
				<div className="login-input">
					<label htmlFor="loginEmail">
						<i className="fa fa-solid fa-envelope icon"></i>
					</label>
					<input
						type="email"
						id="loginEmail"
						placeholder="Enter your Employee Email"
					/>
				</div>
			)}

			{props.type === "password" && (
				<div className="login-input">
					<label htmlFor="loginPassword">
						<i className="fa fa-solid fa-lock icon"></i>
					</label>
					<input
						type="password"
						id="loginPassword"
						placeholder="Enter your Password"
					/>
					<i className="fa fa-solid fa-eye"></i>
				</div>
			)}
		</div>
	);
}

export default InputField;
