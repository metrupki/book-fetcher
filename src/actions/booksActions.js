import axios from "axios";
import {subjects} from '../api';

const getRandomInt = (max) => {
    let min = 0
    //The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min) + min);
    }

//action Creator
export const loadBooks = (subject) => async (dispatch) => {
    
    dispatch({
        type: "SEARCH_LOADING"
    })

    // get random books by subject
    const empty = await axios.get(subjects(subject, "0", "0"))
    const numOfWork = empty.data.work_count
    const subjectsData = []
    if (numOfWork !== 0) {
        const checkList = []
        for (let i = 0; i < 10; i++) {
            let num = getRandomInt(numOfWork)
            const {data} = await axios.get(subjects(subject, "1", num))
            if(checkList.includes(data.works[0].key) === false) {
                subjectsData.push(data.works[0])
                checkList.push((data.works[0].key))
            }
        }
    }

    //subjectsData.data.work_count
    dispatch({
        type: "FETCH_SEARCHED",
        payload: {
            searched: subjectsData,
        }
    })
}