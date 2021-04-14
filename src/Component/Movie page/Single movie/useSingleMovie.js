import { useContext, useEffect, useState } from "react";
import { __RouterContext as RouterContext } from "react-router";
import { singleMovieData } from "../../Home page/Movies/useMoviesApi";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

export const useSingleMovie = () => {
  const useRouter = () => useContext(RouterContext);
  const { match } = useRouter();
  const movieId = match.params.id;
  const { user } = useAuth0();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      const { movie, comments, trailer } = await singleMovieData(
        movieId,
        user?.nickname
      );
      setMovie({ ...movie.data, ...trailer.data, comments: comments.data });
    };
    fetchMovie().then(() => setLoading(false));
  }, [setMovie, movieId, user]);

  const deleteMovie = async(id) => axios.delete(`http://localhost:5000/api/movies/${id}`);

  const editMovie = async(movie) => axios.put(`http://localhost:5000/api/movies/${movie.id}`, movie);

  return {
    movie,
    loading,
    setMovie,
    deleteMovie,
    editMovie
  };
};
