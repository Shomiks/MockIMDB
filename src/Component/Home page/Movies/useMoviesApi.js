import axios from 'axios';
import { useEffect, useState} from 'react';

const apiKey = 'k_f1xb5k3v';

export async function singleMovieData(id) {
    const movie = await axios(`https://5fe8885b2e12ee0017ab47c0.mockapi.io/api/v1/movies/${id}`);
    const comments = await axios(`https://5fe8885b2e12ee0017ab47c0.mockapi.io/api/v1/movies/${id}/comments`);
    const trailer = await axios(`https://imdb-api.com/API/YouTubeTrailer/${apiKey}/${movie.data.imdbId}`);

    return {
        movie,
        comments,
        trailer
    };
}

export const useMoviesApi = () => {
    const [movies, setMovies] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            const categories = await axios("https://5fe8885b2e12ee0017ab47c0.mockapi.io/api/v1/categories");
            const movies = await axios("https://5fe8885b2e12ee0017ab47c0.mockapi.io/api/v1/movies");
            setCategories(categories.data);
            setMovies(movies.data);
        };
        fetchMovies().then(() => setLoading(false));
    }, []);

    return {
        movies,
        categories,
        loading
    };
};