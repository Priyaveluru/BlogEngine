import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Article = ({ article }) => {
	const date = new Date(article.timestamp).toLocaleDateString("en-US")
	return (
		<article className="mt-90">
			<header className="text-center mb-40">
				<h3>
					<Link to={`article/${article.slug}`}>{article.title}</Link>
				</h3>
				<div className="link-color-default fs-12">
					<div>{date}</div>
				</div>
			</header>
			<div className="text-center mb-40">
			{article.description.replace( /(<([^>]+)>)/ig, '')}
			</div>
		</article>
	);
};

Article.displayName = "Article";

Article.propTypes = {
	className: PropTypes.string
};

export default Article;
