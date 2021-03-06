import React from "react";
import PropTypes from "prop-types";
import Articles from "./Articles/Articles";

class Welcome extends React.Component {
	state = {
		articles: { 
		next_page_url:'',
		prev_page_url:'',
		data:[]
	   }
	};
	

	async componentWillMount() {
		const articles = await this.props.getArticles();
		this.setState({ articles: { data: articles }} );
		this.props.setArticles(articles.data);
	}

	handlePagination = async url => {
		const articles = await this.props.getArticles(url);
		this.setState({ articles });
		this.props.setArticles(articles.data);
	};

	render() {
		return (
			<Articles
				nextUrl={''}
				previousUrl={''}
				handlePagination={this.handlePagination}
				articles={this.state.articles.data}
			/>
		);
	}
}

Welcome.displayName = "Welcome";

Welcome.propTypes = {
	className: PropTypes.string
};

export default Welcome;
