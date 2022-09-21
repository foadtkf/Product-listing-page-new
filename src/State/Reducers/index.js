import { combineReducers } from "redux";
import reducer from "./ValueReducer";
const reducers = combineReducers({
  amount: reducer,
});
export default reducers;
