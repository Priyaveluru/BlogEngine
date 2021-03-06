import React from "react";
import PropTypes from "prop-types";
import Banner from "../../Banner/Banner";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const CreateArticleForm = ({
	handleInputChange,
	categories=[],
	handleSubmit,
	errors,
	editing,
	article,
	title,
	category,
	content,
	updateArticle,
	handleEditorState
}) => (
	<React.Fragment>
		<Banner
			backgroundImage={`url(${
				process.env.PUBLIC_URL
			}/assets/img/bg-laptop.jpg)`}
			title={editing ? `Editing Article: ${article.title}` : "Write an Article"}
		/>
		<main className="main-content">
			<section className="section">
				<div className="container">
					<div className="row">
						<div className="col-12 col-lg-12">
							{/* <ul className="list-group">
								{errors.map(error => (
									<li
										key={error.message}
										className="list-group-item text-danger"
									>
										{error.message}
									</li>
								))}
							</ul> */}
							<form
								className="p-30 bg-gray rounded"
								onSubmit={editing ? updateArticle : handleSubmit}
							>
								<div className="row">
									<div className="form-group col-md-12 my-5">
										<input
											name="image"
											type="file"
											className="form-control"
											onChange={handleInputChange}
										/>
									</div>
									<div className="form-group col-12 col-md-6">
										<input
											onChange={handleInputChange}
											className="form-control form-control-lg"
											type="text"
											name="title"
											placeholder="Title"
											value={title}
										/>
									</div>
									<div className="form-group col-12 col-md-6">
										<select
											name="category"
											value={category || ""}
											onChange={handleInputChange}
											className="form-control form-control-lg"
										>
											<option value>Select category</option>
                                            <option value></option>
										</select>
									</div>
								</div>
								<div className="form-group">
									<Editor
										editorState={content}
										onEditorStateChange={handleEditorState}
									/>
								</div>
								<div className="text-center">
									<button className="btn btn-lg btn-primary" type="submit">
										{editing ? "Update Article" : "Create Article"}
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</main>
	</React.Fragment>
);

CreateArticleForm.displayName = "CreateArticleForm";

CreateArticleForm.propTypes = {
	handleInputChange: PropTypes.func.isRequired,
	categories: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired
		})
	).isRequired,
	handleSubmit: PropTypes.func.isRequired,
	errors: PropTypes.arrayOf(
		PropTypes.shape({
			message: PropTypes.string.isRequired
		})
	).isRequired,
	editing: PropTypes.bool.isRequired,
	article: PropTypes.shape({
		title: PropTypes.string.isRequired
	}),
	title: PropTypes.string.isRequired,
	content: PropTypes.objectOf(PropTypes.any).isRequired,
	category: PropTypes.string,
	updateArticle: PropTypes.func.isRequired
};

CreateArticleForm.defaultProps = {
	article: null,
	category: null
};

export default CreateArticleForm;
