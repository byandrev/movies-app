const OMDB_API_TOKEN = import.meta.env.VITE_OMDB_API_TOKEN
const API_URL_OMDB = `http://www.omdbapi.com/?apikey=${OMDB_API_TOKEN}&`

export {
  API_URL_OMDB
}

