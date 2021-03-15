import { connect } from "react-redux";
import CommentsList from "./CommentsList";
import { bindActionCreators } from "redux";
import {
  addComment,
  addLike,
  addReply,
} from "../../redux/actions/commentActions";
import PropTypes from "prop-types";
/**
 * This component handles the redux store interactions
 * and serves as a top level container for the comment list.
 */
function CommentsContainer(props) {
  console.log(props.comments);
  return (
    <CommentsList
      handleAdd={(text) => {
        props.addComment(text);
      }}
      handleReply={(id, text) => {
        const parent = props.comments.find((val) => val.id === id);
        props.addReply(parent, text);
      }}
      handleLikeIfReply={(parent, comment) => {
        props.addLike(parent, comment);
      }}
      handleLike={(comment) => {
        props.addLike({}, comment);
      }}
      comments={props.comments}
    ></CommentsList>
  );
}
function mapStateToProps(state) {
  return {
    comments: state.comments,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addComment, addLike, addReply }, dispatch);
}
CommentsContainer.propTypes = {
  comments: PropTypes.array.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);
