import {useContext, useEffect, useState} from 'react';
import {__RouterContext as RouterContext} from 'react-router';
import {singleMovieData} from '../Home page/useMovies';

export const useSingleMovie = () => {

    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState({});
    const useRouter = () => useContext(RouterContext);
    const {match} = useRouter();

    useEffect(() => {
        const fetchUsers = async () => {
            const {movie, comments} = await (singleMovieData(match.params.id));
            setComments(comments.data);
            setMovie(movie.data);
        };
        fetchUsers().then(() => setLoading(false));
    }, []);

    return {
        movie,
        comments,
        loading
    }
};
