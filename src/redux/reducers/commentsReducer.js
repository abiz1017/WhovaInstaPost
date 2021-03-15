import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_COMMENT:
      return [...state, { ...action.comment, id: state.length }];
    case types.LIKE_COMMENT:
      // if comment is not reply, add a like to the
      // comment object and return array.
      if (action.comment.isReply === false) {
        const x = state.filter((comment) => comment.id !== action.comment.id);
        const y = [
          {
            ...action.comment,
            liked: !action.comment.liked,
            likes: action.comment.likes + 1,
          },
        ];
        const sorted = [...x, ...y].sort((a, b) => {
          return a.id - b.id;
        });
        return sorted;
      } else {
        // if comment is reply,
        // need to extract the replies from the parent comment
        // and add the updated comment back into the parent comments reply list
        // and return that updated array.
        const n = state.filter((comment) => comment.id !== action.parent.id);
        const otherReplies = action.parent.replies.filter(
          (comment) => comment.id !== action.comment.id
        );
        const nReply = { ...action.comment, liked: !action.comment.liked };
        const updated = [...otherReplies, nReply];
        action.parent = { ...action.parent, replies: [...updated] };
        const sorted = [...n, action.parent].sort((a, b) => {
          return a.id - b.id;
        });
        debugger;
        return sorted;
      }
    case types.REPLY_TO_COMMENT:
      const n = state.filter((comment) => comment.id !== action.parent.id);
      // right now it reorders the comments, but can change to order by id
      const reply = [
        {
          ...action.parent,
          replies: [...action.parent.replies, action.comment],
        },
      ];
      // call sort to preserve the order of comments,
      // id is assigned based on order of commenting
      const sorted = [...n, ...reply].sort((a, b) => {
        return a.id - b.id;
      });
      return sorted;
    default:
      return state;
  }
}
