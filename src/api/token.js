import audiApi from "./audiApi"


export const tokenAuth = (token) => {
    if (token) {
        audiApi.defaults.headers.common = {'Authorization': `bearer ${token}`}
    } else {
        delete audiApi.defaults.headers.common["Authorization"]
    }
}