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

		this.submitHandler = this.submitHandler.bind(this);
		this.firstNameHandler = this.firstNameHandler.bind(this);
		this.lastNameHandler = this.lastNameHandler.bind(this);
	}

	submitHandler(event) {
		event.preventDefault();
		this.setState({
			sumbitted: true,
		});

		if (this.state.firstName && this.state.lastName) {
			this.setState({
				allValid: true,
			});

			setTimeout(() => {
				this.setState({
					allValid: false,
				});
			}, 3000);
		}
	}

	firstNameHandler(event) {
		this.setState({
			firstName: event.target.value,
		});
	}
	lastNameHandler(event) {
		this.setState({
			lastName: event.target.value,
		});
	}

	render() {
		return (
			<div className="form-container">
				<form className="register-form" onSubmit={this.submitHandler}>
					{/* Uncomment the next line to show the success message */}
					{this.state.sumbitted && this.state.allValid && (
						<div className="success-message">
							Success! Thank you for registering
						</div>
					)}
					<input
						id="first-name"
						value={this.state.firstName}
						className="form-field"
						type="text"
						placeholder="First Name"
						name="firstName"
						onChange={this.firstNameHandler}
					/>
					{/* Uncomment the next line to show the error message */}
					{this.state.sumbitted && !this.state.firstName && (
						<span id="first-name-error">Please enter a first name</span>
					)}
					<input
						id="last-name"
						value={this.state.lastName}
						className="form-field"
						type="text"
						placeholder="Last Name"
						name="lastName"
						onChange={this.lastNameHandler}
					/>
					{/* Uncomment the next line to show the error message */}
					{this.state.sumbitted && this.state.lastName.length === 0 && (
						<span id="last-name-error">Please enter a last name</span>
					)}
					<button className="form-field" type="submit">
						Register
					</button>
				</form>
			</div>
		);
	}
}
