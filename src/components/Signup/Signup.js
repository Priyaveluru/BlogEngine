import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const  Signup = ({ registerUser , setAuthUser }) => {
	const [ formData, setFormData ] = useState({
		name: "",
		password: "",
		password_confirmation: "",
		errors: []
	});

const handleInputChange = (e) => {
	e.preventDefault();
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

 const handleFormSubmit = async event => {
		event.preventDefault();
		//validation by indicative package
		try {
			const user = await registerUser(formData);
			setAuthUser(user);
		} catch (errors) {
			setFormData({ errors });
		}
	};

		return (
			<div
				className="mh-fullscreen bg-img center-vh p-20"
				style={{
					backgroundImage: `url(${
						process.env.PUBLIC_URL
					}/assets/img/bg-girl.jpg)`
				}}
			>
				<div
					className="card card-shadowed p-50 w-400 mb-0"
					style={{ maxWidth: "100%" }}
				>
					<h5 className="text-uppercase text-center">Register</h5>
					<br />
					<br />
					<form className="form-type-material" onSubmit={handleFormSubmit}>
						<div className="form-group">
							<input
								name="name"
								onChange={handleInputChange}
								type="text"
								className="form-control"
								placeholder="Username"
							/>
						</div>
						<div className="form-group">
							<input
								name="password"
								onChange={handleInputChange}
								type="password"
								className="form-control"
								placeholder="Password"
							/>
						</div>
						<div className="form-group">
							<input
								name="password_confirmation"
								onChange={handleInputChange}
								type="password"
								className="form-control"
								placeholder="Password (confirm)"
							/>
						</div>
						<br />
						<button
							className="btn btn-bold btn-block btn-primary"
							type="submit"
						>
							Register
						</button>
					</form>
					<hr className="w-30" />
					<p className="text-center text-muted fs-13 mt-20">
						Already have an account?
						<Link to="/login">Sign in</Link>
					</p>
				</div>
			</div>
		);
	};

Signup.displayName = "Signup";

Signup.propTypes = {
	registerUser: PropTypes.func.isRequired,
	setAuthUser: PropTypes.func.isRequired
};

export default Signup;
