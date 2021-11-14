import { combineReducers } from "redux";
import BoxOfficeReducer from "./boxOfficeReducer";
import GetListReducer from "./getListReducer";

const rootReducer = combineReducers({
    BoxOfficeReducer,
    GetListReducer
})

export default rootReducer