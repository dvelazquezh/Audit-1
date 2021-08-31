import { types } from "types/types"



const initialState = {
    sessions:[]
}


export const createtemplateReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case types.createSession:
            return {
                ...state,
                sessions: [...state.sessions, action.payload]
            }
       
        case types.borrarDatos:
            return {
                ...state,
                sessions: []
            }
       
        default:
            return state;
    }

}
