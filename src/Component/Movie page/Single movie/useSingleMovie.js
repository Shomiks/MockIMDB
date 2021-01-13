import {useContext, useEffect, useState} from 'react';
import {__RouterContext as RouterContext} from 'react-router';
import {singleMovieData} from '../../Home page/Movies/useMoviesApi';

export const useSingleMovie = () => {

    const useRouter = () => useContext(RouterContext);
    const {match} = useRouter();
    const movieId = match.params.id;

    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovie = async () => {
            const {movie, comments, trailer} = await (singleMovieData(movieId));
            setMovie({...movie.data, ...trailer.data, comments: comments.data});
        };
        fetchMovie().then(() => setLoading(false));
    }, [setMovie]);

    return {
        movie,
        loading,
        setMovie
    }
};
