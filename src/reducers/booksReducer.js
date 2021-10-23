const initState = {
    searched: [],
    searchIsLoading: false,
}

const booksReducer = (state=initState, action) => {
    switch(action.type) {
        case "FETCH_SEARCHED":
            return {
                ...state,
                searched: action.payload.searched,
                searchIsLoading: false,
            }
        case "CLEAR_SEARCHED":
            return {
                ...state,
                searched: [],
            }
        case "SEARCH_LOADING":
            return {
                ...state,
                searchIsLoading: true,
            }
        default: 
            return {...state}
    }
}

export default booksReducer;