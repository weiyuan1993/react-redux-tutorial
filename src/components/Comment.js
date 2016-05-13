import React, { Component } from 'react';
import marked from 'marked';
class Comment extends Component {
	render(){
		return(
			<div className="comment">
				<h2 className="commentAuthor">
					{this.props.author}
				</h2>
				<span dangerouslySetInnerHTML={{__html: marked(this.props.children)}}>
				</span> {/*show the comment*/}
			</div>

		)
	}
}
export default Comment;