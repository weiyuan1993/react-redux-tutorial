import * as commentActions from '../actions/index';
const comment = (state= {comments:[]}, action) => {
	switch(action.type){
		case 'SUBMIT_COMMENT':
			let comments = state.comments.concat([action.comment]);
			return {comments:comments};
		case 'RECEIVE_COMMENTS':
			return {comments:action.comments};
		default:
			return state;
	}
}

export default comment;