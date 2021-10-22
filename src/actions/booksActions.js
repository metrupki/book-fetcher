import axios from "axios";
import {subjects} from '../api';

//action Creator
export const loadBooks = () => async (dispatch) => {
    const subjectsData = await axios.get(subjects())
    dispatch({
        type: "FETCH_SEARCHED",
        payload: {
            searched: subjectsData.data.works,
        }
    })
}