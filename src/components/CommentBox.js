import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

class CommentBox extends Component {
	componentDidMount(){
		this.props.fetchComments();
		setInterval(this.props.fetchComments,2000);
	}
	render(){
		const {comments, saveComment} = this.props;
		return(
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList comments ={comments} />
				<CommentForm onCommentSubmit ={saveComment} />
			</div>
		)

	}
}
export default CommentBox;