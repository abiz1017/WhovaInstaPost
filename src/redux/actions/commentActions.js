import * as types from "./actionTypes";

export function addComment(text) {
  const comment = {
    user: "AlBiz",
    text,
    replies: [],
    likes: 0,
    isReply: false,
    liked: false,
  };
  return { type: types.CREATE_COMMENT, comment };
}
export function addLike(parent = {}, comment) {
  return { type: types.LIKE_COMMENT, parent, comment };
}

export function addReply(parent, text) {
  const comment = { user: "AlBiz", text, replies: [], likes: 0, isReply: true };
  return { type: types.REPLY_TO_COMMENT, parent, comment };
}
