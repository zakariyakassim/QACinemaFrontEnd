import axios from 'axios'
export default {
  getMovies () {
    return axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=f000b5430a909fe857a7de49bf27895e&language=en-US&page=1')
      .then(function (response) {
        console.log(response.data)
        return response.data.results
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
