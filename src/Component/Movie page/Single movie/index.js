import React, {createContext} from 'react';
import PageLoader from '../../../lib/Loader';
import {Typography} from '@material-ui/core';
import {useSingleMovie} from './useSingleMovie';
import Comments from './Comments';
import {SingleMovieContainer, Description, Trailer, MediaContainer, Image} from './singleMovieStyles';

export const CommentsContext = createContext(undefined);

const SingeMovie = () => {

    const {movie, loading, setMovie} = useSingleMovie();

    return (
       loading ? <PageLoader/>
       :
               <SingleMovieContainer>
            <Typography variant="h4" align="center">{movie.name}</Typography>
            <MediaContainer>
                <Image src={movie.imageUrl}/>
                <Trailer src={`https://www.youtube.com/embed/${movie.videoId}`} ng-show="showvideo" allowFullScreen/>
            </MediaContainer>
            <Description>{movie.description}</Description>
                   <CommentsContext.Provider value={[movie, setMovie]}>
                   <Comments/>
                   </CommentsContext.Provider>
        </SingleMovieContainer>
    );
};

export default SingeMovie;