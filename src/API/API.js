import axios from "axios"
 const BASE_URL = "https://api.themoviedb.org/3"
 export const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500"
 export const BK_IMG_URL = "https://image.tmdb.org/t/p/original"
const API_KEY = "e54293280fb6972fb1173c3454eb7b83"

export const api = {
  getPopularMove:  () =>
  axios.get(BASE_URL + '/movie/popular', {
    params:{
      api_key: API_KEY,
      page:1,
    },
  }),
  getTopRatedMove:  () =>
  axios.get(BASE_URL + "/movie/top_rated",{
    params:{
      api_key:API_KEY
    }
  }),
  getUpcomingMove:  () =>
  axios.get(BASE_URL + "/movie/upcoming",{
    params:{
      api_key:API_KEY
    }
  }),
  getSingleMove:  (id) =>
  axios.get(BASE_URL + `/movie/${id}`,{
    params:{
      api_key:API_KEY
    }
  }),
  getSimilarMove:  (id) =>
  axios.get(BASE_URL + `/movie/${id}/similar`,{
    params:{
      api_key:API_KEY
    }
  })
}