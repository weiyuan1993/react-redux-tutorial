import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CommentBox from '../components/CommentBox';
import * as commentActions from '../actions/index';

const mapStateToProps = (state) => {
	return {
		comments:state.comments
	};
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(commentActions, dispatch);
}

const App = connect(
	mapStateToProps,
	mapDispatchToProps
)(CommentBox);
export default App;