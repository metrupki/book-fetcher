const initialState = { book: { covers: [] }, isLoading: true };

const detailReducer = (state=initialState, action) => {
    switch(action.type) {
        case "GET_DETAIL":
            return {
                ...state,
                book: action.payload.book,
                authors:action.payload.authors,
                isLoading: false,
            }
        case "LOADING":
            return {
                ...state,
                isLoading: true,
            }
        
        default:
            return {...state}
    }
}

export default detailReducer;