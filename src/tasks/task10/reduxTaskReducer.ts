let initialState = {loading: false}


export const juniorPageReducer = (state=initialState, action: { type: string, loading: boolean }) => {
    switch (action.type) {
        case "SET_LOADING":
            return {...state, loading: action.loading}
        default:
            return state
    }
};