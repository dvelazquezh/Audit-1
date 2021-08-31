import { types } from "types/types"

const initialState = {
    plantilla: [],
    seleccionAuditoría: '',
    seleccionAuditoriaReview: '',
    audit: [],
    auditSection: [],
    auditPoints: [],
    reviews:[],
    preguntas:[]
}


export const auditReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.auditSaveTemplate:
            return {
                ...state,
                plantilla: [...state.plantilla, action.payload]
            }
        case types.auditSelect:
            return {
                ...state,
                seleccionAuditoría: action.payload
            }
        case types.audit:
            return {
                ...state,
                audit: action.payload.uditObtained,
                auditSection: action.payload.auditSectionObtainedAll,
                auditPoints: action.payload.auditPointObtained,
                reviews: action.payload.auditObtainedReviews
            }
        case types.preguntas:
            return {
                ...state,
                preguntas: action.payload
            }
        case types.selectReview:
            return {
                ...state,
                seleccionAuditoriaReview: action.payload
            }
        default:
            return state
    }

}
