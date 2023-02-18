import { combineReducers } from "redux";
import Reducer from "./reducer";

const reducer = combineReducers({
  inputfield: Reducer,
});

export default reducer;
