import axios from "axios";
import config from "../config/index";
const { validateAll } = window;

export default class AuthService {
	async registerUser(data) {
		try {
			const response = await axios.post(`http://localhost:5000/auth/register`, {
				name: data.name,
				password: data.password
			});
			return response.data;
		} catch (errors) {
			const formattedErrors = {};
			if (errors.response && errors.response.status === 422) {
				formattedErrors["email"] = errors.response.data.email[0];
				return Promise.reject(formattedErrors);
			}
			errors.forEach(error => (formattedErrors[error.field] = error.message));
			return Promise.reject(formattedErrors);
		}
	}

	async loginUser(data) {
		try {
			const response = await axios.get(`http://localhost:5000/auth/login`, {
				name: data.name,
				password: data.password
			});
			return response.data;
		} catch (errors) {
			const formattedErrors = {};
			if (errors.response && errors.response.status === 401) {
				formattedErrors["email"] = "Invalid credentials";
				return Promise.reject(formattedErrors);
			}
			errors.forEach(error => (formattedErrors[error.field] = error.message));
			return Promise.reject(formattedErrors);
		}
	}
}
