import {useContext, useEffect, useState} from 'react';
import {__RouterContext as RouterContext} from 'react-router';
import {singleMovieData} from '../../Home page/Movies/useMovies';

export const useSingleMovie = () => {

    const useRouter = () => useContext(RouterContext);
    const {match} = useRouter();
    const movieId = match.params.id;

    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState({});

    useEffect(() => {
        const fetchUsers = async () => {
            const {movie, comments} = await (singleMovieData(movieId));
            setComments(comments.data);
            setMovie(movie.data);
        };
        fetchUsers().then(() => setLoading(false));
    }, []);

    return {
        movie,
        comments,
        loading,
        setComments
    }
};
