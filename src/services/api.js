
import axios from "axios"

// base da api: https://api.themoviedb.org/3/
// url da api : movie/now_playing?api_key=8ee9804dd21abb5363fc3fda3b6671ed&language=pt-BR

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
})

export default api