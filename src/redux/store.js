import { createStore } from "redux";
import movieListReducer from "./movieList/reducer";

const store = createStore(movieListReducer)

export default store;