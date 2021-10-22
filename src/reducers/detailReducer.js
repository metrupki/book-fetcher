const initialState = { book: { covers: [] } };

const detailReducer = (state=initialState, action) => {
    switch(action.type) {
        case "GET_DETAIL":
            return {
                ...state,
                book: action.payload.book
            }
        default:
            return {...state}
    }
}

export default detailReducer;