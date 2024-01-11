import { API_URL_OMDB } from "../config"

async function searchMovie({ title }) {
  const res = await fetch(`${API_URL_OMDB}s=${title}`)
  const data = await res.json()
  return data
}

export {
  searchMovie
}

