import "./Form.css";
import React from "react";

export default class Forms extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			firstName: "",
			lastName: "",
			allValid: false,
			sumbitted: false,
		};
	}

	render() {
		return (
			<div className="form-container">
				<form className="register-form">
					{/* Uncomment the next line to show the success message */}
					{/* <div className="success-message">Success! Thank you for registering</div> */}
					<input
						id="first-name"
						className="form-field"
						type="text"
						placeholder="First Name"
						name="firstName"
					/>
					{/* Uncomment the next line to show the error message */}
					{/* <span id="first-name-error">Please enter a first name</span> */}
					<input
						id="last-name"
						className="form-field"
						type="text"
						placeholder="Last Name"
						name="lastName"
					/>
					{/* Uncomment the next line to show the error message */}
					{/* <span id="last-name-error">Please enter a last name</span> */}
					<button className="form-field" type="submit">
						Register
					</button>
				</form>
			</div>
		);
	}
}
