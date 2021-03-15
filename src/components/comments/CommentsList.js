import Comment from "./Comment";
import { useState } from "react";
import { dispatch } from "react-redux";
/**
 * This component handles the template display
 * and organization of the comment components.
 */
function CommentsList({
  comments,
  handleAdd,
  handleReply,
  handleLike,
  handleLikeIfReply,
}) {
  const [commentText, setCommentText] = useState("");
  return (
    <>
      {comments.map((comment) => {
        return (
          <Comment
            handleLike={handleLike}
            handleLikeIfReply={handleLikeIfReply}
            handleReply={handleReply}
            comment={comment}
          ></Comment>
        );
      })}

      <div
        className="button-row"
        style={{ backgroundColor: "rgba(220, 220, 220, 0.5)" }}
      >
        <hr />
        <div className="end-item"></div>
        <div
          className="end-item field"
          style={{ height: "20px", border: "0.5px" }}
        >
          <input
            type="text"
            name=""
            id=""
            value={commentText}
            onChange={(event) => {
              setCommentText(event.target.value);
            }}
            style={{
              width: "95%",
              padding: "0px",
              border: "1px solid lightgrey",
              backgroundColor: "lightgrey",
            }}
          />
        </div>
        <div className="end-item" style={{ height: "20px" }}>
          <button
            style={{
              height: "20px",
              width: "95%",
              backgroundColor: "lightgrey",
              border: "0px transparent",
              borderRadius: "5px",
            }}
            onClick={(event) => {
              if (commentText === "") {
                alert("May not be empty!");
                return;
              }
              handleAdd(commentText);
              setCommentText("");
            }}
            className="btn btn-secondary"
          >
            Post
          </button>
        </div>
        <div className="end-item"></div>
      </div>
    </>
  );
}

export default CommentsList;
