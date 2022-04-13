import { combineReducers } from "redux";
import userLoginReducer from "./userLoginReducer";


const allReducers = combineReducers({
userLogin:userLoginReducer,
});
export default allReducers;