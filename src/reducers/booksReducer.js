const initState = {
    searched: []
}

const booksReducer = (state=initState, action) => {
    switch(action.type) {
        case "FETCH_SEARCHED":
            return {
                ...state,
                searched: action.payload.searched
            }
        default: 
            return {...state}
    }
}

export default booksReducer;