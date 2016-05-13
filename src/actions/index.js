import { fetch,save } from '../lib/comment-api';

export const submitComment = (comment) => {
	return{
		type:'SUBMIT_COMMENT',
		comment
	};
}

export const receiveComments = (comments) => {
	return{
		type:'RECEIVE_COMMENTS',
		comments
	};
}

export const fetchComments = () => {
	return dispatch =>{
		fetch("/api/comments")
			.then((comments)=>{
				dispatch(receiveComments(comments.data));
			}).catch((error) =>{
				console.error(error)
			});
	};
}

export const saveComment = (comment) => {
	return dispatch => {
		dispatch(submitComment(comment));
		save("/api/comments",comment)
			.then((comment)=>{
				console.log("save comment");
			}).catch((error)=>{
				console.error(error);
			});
	};
}