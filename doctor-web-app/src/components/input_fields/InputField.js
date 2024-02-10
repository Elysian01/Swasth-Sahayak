import { useEffect } from "react";

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
						placeholder={props.placeholder}
						required
						spellCheck={false}
						autoComplete={false}
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
						placeholder={props.placeholder}
						required
						spellCheck={false}
						autoComplete={false}
					/>
				</div>
			)}
		</div>
	);
}

export default InputField;
