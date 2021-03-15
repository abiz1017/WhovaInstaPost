import { combineReducers } from "redux";
import comments from "./commentsReducer";
const rootReducer = combineReducers({
  comments,
});

export default rootReducer;
