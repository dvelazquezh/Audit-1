import axios from 'axios';

//   const baseURL = 'http://localhost:57069';
  const baseURL = 'http://hailor-001-site9.ctempurl.com';

const audiApi = axios.create({
    baseURL,
    headers: { "Access-Control-Allow-Origin": "*" }
});


audiApi.interceptors.request.use((req) => {
    if (localStorage.getItem('token')) {
        req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    }

    return req

})



// audiApi.interceptors.request.use(
//     async (config) => {

//         if (token) {
//             console.log("asdddddd");

//             config.headers.common =  {'Authorization' :`Bearer ${token}`}
//             // config.headers['x-token'] = token;
//         }
//         return config;
//     }
// );



export default audiApi;



// audiApi.interceptors.request.use( (req) => {
//     if (localStorage.getItem('token')) {
//         req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('token'))}`;
//     }

//     return req

// } )


// export const getusers = () => {
//     audiApi.get(`/user`)
// }
