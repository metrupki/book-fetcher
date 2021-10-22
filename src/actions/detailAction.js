import axios from "axios";
import { bookDetails } from "../api";

export const loadDetail = (key) => async (dispatch) => {
    const detailData = await axios.get(bookDetails(key))

    dispatch({
        type: "GET_DETAIL",
        payload: {
            book: detailData.data,
        }
    })
}

