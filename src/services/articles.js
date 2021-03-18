import Axios from "axios";
import config from "../config";
const { validateAll } = window;

export default class ArticlesService {
	async getArticles(url = `http://localhost:5000/articles`) {
		const response = await Axios.get(url);
		return response.data;
	}

	async getUserArticles(url = `http://localhost:5000/articles`) {
		const response = await Axios.get(url);
		return response.data;
	}

	async deleteArticle(id, token) {
		await Axios.delete(`${config.apiUrl}/articles/${id}`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
		return true;
	}

	async getArticle(slug) {
		const response = await Axios.get(`${config.apiUrl}/article/${slug}`);
		return response.data.data;
	}

	createArticle = async (data, token) => {

		try {
			const date = new Date();
			const response = await Axios.post(
				`http://localhost:5000/write/articles`,
				{
					title: data.title,
					content: data.content,
					imageUrl: data.image,
					timestamp: date
				}
			);
			return response.data;
		} catch (errors) {
			if (errors.response) {
				return Promise.reject(errors.response.data);
			}
			return Promise.reject(errors);
		}
	};
}
