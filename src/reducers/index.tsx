import { combineReducers } from "redux";
import tutorials from "./tutorials";
import appSetting from "./appSetting";

export default combineReducers({
  tutorials,
  appSetting
});
