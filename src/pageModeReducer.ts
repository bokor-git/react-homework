

let initialState = {darkMode: false}


export const pageModeReducer = (state=initialState, action: changeSiteMode) => {
    switch (action.type) {
        case "SET_MODE":
            return {...state, darkMode: action.darkMode}
        default:
            return state
    }
};

type changeSiteMode = {type:"SET_MODE", darkMode:boolean}

export const changeSiteModeAC = (darkMode:boolean):changeSiteMode=>{
    return {type:"SET_MODE", darkMode}
}