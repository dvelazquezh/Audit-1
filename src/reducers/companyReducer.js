import { types } from "types/types"

const initialState = {
    company: '',
    LogoImageURL:''
}


export const companyReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.companyFile:
            return {
                ...state,
                LogoImageURL: action.payload.file
            }
        default:
            return state
    }

}
