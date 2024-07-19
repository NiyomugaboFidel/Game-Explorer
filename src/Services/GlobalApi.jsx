import axios from "axios"


const key = "0e855ebafc4b482eae5b1dabbd997897"
const axiosCreate = axios.create({
    baseURL:'https://api.rawg.io/api'
})

const getGenreList = axiosCreate.get('/genres?key='+key);
const getAllGames = axiosCreate.get('/games?key='+key);
const getGameListByGenreId = (id)=> axiosCreate.get('/games?key='+key+'&genres='+id)
export default {
    getGenreList,
    getAllGames,
    getGameListByGenreId
}