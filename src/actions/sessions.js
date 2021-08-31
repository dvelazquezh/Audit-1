import { types } from "types/types"




export const agregarSession = (nombreSesion, maxpoin, inputFiels) => {
    return {
        type: types.createSession,
        payload: {
            nombreSesion,
            maxpoin,
            inputFiels
        }
    }
}


export const borrarDatos = () => {
    return{
        type: types.borrarDatos
    }
}

export const agregarPreguntas = (preguntas) => {
    return{
        type: types.preguntas,
        payload: preguntas
    }
}