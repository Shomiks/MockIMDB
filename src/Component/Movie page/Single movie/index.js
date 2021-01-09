import React, {createContext} from 'react';
import PageLoader from '../../../lib/Loader';
import {Paper, Typography} from '@material-ui/core';
import styled from 'styled-components';
import {useSingleMovie} from './useSingleMovie';
import Comments from './Comments';

const SingleMovieContainer = styled(Paper)`
    margin: 0 auto 50px;
    width: 80%;
    justify-content: center;
    padding: 30px;
`;

const MediaContainer = styled.div`
    display: flex;
    margin: 30px 0;
    height: 300px;
    justify-content: center;
`;

const Image = styled.img`
    width: 200px;
    height: 100%;
`;

const Description = styled(Typography)`
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    margin-bottom: 20px !important;
`;

export const CommentsContext = createContext(undefined);

const SingeMovie = () => {

    const {movie, comments, loading, setComments} = useSingleMovie();

    return (
       loading ? <PageLoader/>
       :
               <SingleMovieContainer>
            <Typography variant="h4" align="center">{movie.name}</Typography>
            <MediaContainer>
                <Image src={movie.imageUrl}/>
            </MediaContainer>
            <Description>{movie.description}</Description>
                   <CommentsContext.Provider value={[comments, setComments]}>
                   <Comments/>
                   </CommentsContext.Provider>
        </SingleMovieContainer>
    );
};

export default SingeMovie;