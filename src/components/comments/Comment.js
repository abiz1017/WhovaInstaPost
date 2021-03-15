import { FaHeart } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { useState } from "react";

/**
 * This function handles the individual comment component
 * and renders differently based on whether or not
 * the component is a comment.
 * It is recursively defined as the comment
 * has other comments within it.
 */
function Comment({ comment, handleReply, handleLike, handleLikeIfReply }) {
  const { user, text, landscape } = comment;
  const [reply, setReply] = useState("");
  const [showReplies, setShowReplies] = useState(false);
  const [liked, setLiked] = useState(comment.liked);
  const likeIfReply = (child) => {
    handleLikeIfReply(comment, child);
  };
  debugger;
  return (
    <>
      <div
        className="comment-container"
        style={{
          backgroundColor: comment.isReply
            ? "transparent"
            : "rgba(220, 220, 220, 0.5)",
        }}
      >
        <div className="comment-row">
          {landscape && (
            <div className="end-item">
              <img src="" alt="" />{" "}
            </div>
          )}
          <div
            className="end-item"
            style={{ justifyContent: "left", flexGrow: "2" }}
          >
            <strong style={{ paddingLeft: "20%" }}>{user}</strong>
          </div>
          <div className="text-item">
            <p>{text}</p>
          </div>
          <div className="end-item">
            <IconContext.Provider
              value={{
                className: "",
                style: {
                  stroke: "black",
                  strokeWidth: 10,
                  justifyContent: "center",
                },
              }}
            >
              {" "}
              <FaHeart
                color={liked ? "red" : "white"}
                onClick={() => {
                  console.log("clicked");
                  setLiked(!liked);
                  if (comment.isReply) {
                    debugger;
                    likeIfReply(comment);
                  } else {
                    handleLike(comment);
                  }
                }}
                size={20}
              />
            </IconContext.Provider>
          </div>
        </div>
        {!comment.isReply && comment.replies.length !== 0 && (
          <div className="button-row" style={{ padding: "10px" }}>
            <div className="end-item"></div>
            <button
              className="end-item"
              onClick={() => {
                setShowReplies(!showReplies);
              }}
            >
              {showReplies
                ? "Hide Replies"
                : `View Replies (${comment.replies.length})`}
            </button>
            <div className="end-item"></div>
          </div>
        )}
        {showReplies && !comment.isReply && (
          <div className="reply-row">
            <hr />
            {comment.replies.map((reply) => {
              return (
                <div key={reply.id}>
                  <Comment
                    comment={reply}
                    handleLikeIfReply={likeIfReply}
                  ></Comment>
                </div>
              );
            })}
          </div>
        )}
        {!comment.isReply && (
          <div className="button-row">
            <div className="end-item"></div>
            <div
              className="end-item field"
              style={{ height: "30px", border: "0.5px" }}
            >
              <input
                type="text"
                name=""
                id=""
                value={reply}
                onChange={(event) => {
                  setReply(event.target.value);
                }}
                style={{
                  width: "95%",
                  padding: "0px",
                  border: "1px solid lightgrey",
                  backgroundColor: "lightgrey",
                }}
              />
            </div>
            <div className="end-item" style={{ height: "30px" }}>
              <button
                style={{
                  height: "20px",
                  width: "95%",
                  backgroundColor: "lightgrey",
                  border: "0px transparent",
                  borderRadius: "5px",
                }}
                onClick={(event) => {
                  if (reply === "") {
                    alert("field may not be empty!");
                    return;
                  }
                  handleReply(comment.id, reply);
                  setReply("");
                }}
                className="btn btn-secondary"
              >
                Reply
              </button>
            </div>
            <div className="end-item"></div>
          </div>
        )}
      </div>
    </>
  );
}
export default Comment;
// add prop types
