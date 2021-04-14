import axios from "axios";
import { useEffect, useState } from "react";

const apiKey = "k_f1xb5k3v";

export async function singleMovieData(id, nickname) {
  const movie = await axios(`http://localhost:5000/api/movies/${id}`);
  const comments = await axios(
    `http://localhost:5000/api/comments?movieId=${id}`
  );
  const users = nickname && await axios.put(`http://localhost:5000/api/users`, {
    nickname: nickname
  });
  const trailer = await axios(
    `https://imdb-api.com/API/YouTubeTrailer/${apiKey}/${movie.data.imdbId}`
  );

  return {
    movie,
    comments,
    trailer,
    users,
  };
}

export const useMoviesApi = () => {
  const [movies, setMovies] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const categories = await axios("http://localhost:5000/api/categories");
      const movies = await axios("http://localhost:5000/api/movies");
      setCategories(categories.data);
      setMovies(movies.data);
    };
    fetchMovies().then(() => setLoading(false));
  }, []);

  return {
    movies,
    categories,
    loading,
  };
};
