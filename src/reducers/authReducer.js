import { types } from "types/types";


const initialState = {
    id:'',
    uid: '',
    name: '',
    _email: '',
    token: '',
    estado: '',
    photoURL: '',
    companyId: '',
    company: '',
    photoCompany:'',
    planSeleccionado:''
}


export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.login:
            return {
                ...state,
                uid: action.payload.uid,
                name: action.payload.displayName,
                _email: action.payload.email,
                photoURL: action.payload.photoURL,
                estado: action.payload.estado
            }
        case types.token:
            return {
                ...state,
                token: action.payload.token
            }
        case types.logo:
            return {
                ...state,
                photoCompany: action.payload.logo,
                company: action.payload.company
            }
        case types.state:
            return {
                ...state,
                id: action.payload.id,
                estado: action.payload.state,
                companyId: action.payload.CompanyID
            }
        case types.selectPlan:
            return {
                ...state,
                planSeleccionado: action.payload
            }
        case types.logout:
            return {}

        default:
            return state;
    }

}
