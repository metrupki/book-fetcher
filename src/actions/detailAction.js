import axios from "axios";
import { bookDetails } from "../api";

export const loadDetail = (key, authors) => async (dispatch) => {

    dispatch({
        type: "LOADING"
    })

    const detailData = await axios.get(bookDetails(key))

    dispatch({
        type: "GET_DETAIL",
        payload: {
            book: detailData.data,
            authors: authors,
        }
    })
}

