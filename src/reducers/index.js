import { combineReducers } from "redux";
import booksReducer from './booksReducer';
import detailReducer from "./detailReducer";

const rootReducer = combineReducers({
    books: booksReducer,
    bookDetail: detailReducer,
});

export default rootReducer;
