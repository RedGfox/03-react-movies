import axios from 'axios';
import type { Movie } from '../types/movie';

const API_URL = 'https://api.themoviedb.org/3/search/movie';
const TOKEN = `Bearer ${import.meta.env.VITE_API_KEY}`;

interface FetchMoviesParams {
  query: string;
}

interface FetchMoviesResponse {
  results: Movie[];
}

export async function fetchMovies({
  query,
}: FetchMoviesParams): Promise<Movie[]> {
  const response = await axios.get<FetchMoviesResponse>(API_URL, {
    params: { query },
    headers: {
      Authorization: TOKEN,
    },
  });

  return response.data.results;
}
